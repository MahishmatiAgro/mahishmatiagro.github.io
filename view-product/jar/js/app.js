const $ = (id) => document.getElementById(id);
// Files next to this script (index.html maps "three" to js/vendor/three.module.js)
const asset = (path) => new URL(`../${path}`, import.meta.url).href;
// 3D jar shown in place of the photo on /view-product/?product=P0003.
// The label texture comes from the label generator: in labels/mushroom-powder run
// mahishmati_label.py, then update_jar_texture.py (writes imgs/label.png here).
// The jar turns slowly, turns sideways only and does not zoom, so the page still scrolls.
const LABEL = asset("imgs/label.png");
const MODELS = ["jar_body", "jar_cap", "label_wrap"].map((name) => asset(`models/${name}.obj`));
(async () => {
    try {
        const THREE = await import("three");
        const [{ OrbitControls }, { RoomEnvironment }] = await Promise.all([
            import("./vendor/OrbitControls.js"),
            import("./vendor/RoomEnvironment.js"),
        ]);
        const canvas = $("canvas"),
            stage = $("stage");
        const renderer = new THREE.WebGLRenderer({
            canvas,
            antialias: true,
            alpha: true,
            preserveDrawingBuffer: true,
            powerPreference: "high-performance",
        });
        renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMappingExposure = 1.12;
        const scene = new THREE.Scene();
        const env = new RoomEnvironment();
        const pmrem = new THREE.PMREMGenerator(renderer);
        const envTarget = pmrem.fromScene(env, 0.05);
        scene.environment = envTarget.texture;
        env.dispose();
        pmrem.dispose();
        scene.add(new THREE.HemisphereLight(0xffffff, 0xb8aa8c, 2.3));
        const key = new THREE.DirectionalLight(0xfff8e9, 3.2);
        key.position.set(-100, 180, 130);
        scene.add(key);
        const soft = new THREE.DirectionalLight(0xffffff, 1.7);
        soft.position.set(100, 80, -100);
        scene.add(soft);
        const camera = new THREE.PerspectiveCamera(36, 1, 1, 1200);
        camera.position.set(0, 86, 250);
        const controls = new OrbitControls(camera, canvas);
        controls.target.set(0, 61, 0);
        controls.enableDamping = true;
        controls.dampingFactor = 0.075;
        controls.minDistance = 90;
        controls.maxDistance = 620;
        controls.maxPolarAngle = Math.PI * 0.83;
        controls.autoRotateSpeed = 0.7;
        controls.enablePan = true;
        // Minimal OBJ reader for these files: "v", optional "vt" with the same index
        // as its "v", and triangle "f" lines. Normals are computed, as before.
        const loadOBJ = async (url) => {
            const response = await fetch(url);
            if (!response.ok) throw new Error(`Could not load ${url}`);
            const pos = [],
                uv = [],
                index = [];
            for (const line of (await response.text()).split("\n")) {
                const [kind, ...rest] = line.trim().split(/\s+/);
                if (kind === "v") pos.push(+rest[0], +rest[1], +rest[2]);
                else if (kind === "vt") uv.push(+rest[0], +rest[1]);
                else if (kind === "f")
                    for (const corner of rest) index.push(parseInt(corner, 10) - 1);
            }
            const g = new THREE.BufferGeometry();
            g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
            g.setIndex(new THREE.BufferAttribute(new Uint32Array(index), 1));
            if (uv.length) g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(uv), 2));
            g.computeVertexNormals();
            g.computeBoundingSphere();
            return g;
        };
        const [bodyGeo, capGeo, labelGeo] = await Promise.all(MODELS.map(loadOBJ));
        const texture = await new THREE.TextureLoader().loadAsync(LABEL);
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
        texture.generateMipmaps = true;
        texture.minFilter = THREE.LinearMipmapLinearFilter;
        texture.magFilter = THREE.LinearFilter;
        const pet = new THREE.MeshPhysicalMaterial({
            color: 0xffffff,
            metalness: 0,
            roughness: 0.12,
            transmission: 1,
            thickness: 0.75,
            ior: 1.47,
            clearcoat: 1,
            clearcoatRoughness: 0.09,
            envMapIntensity: 1.25,
            side: THREE.DoubleSide,
        });
        const gold = new THREE.MeshStandardMaterial({
            color: 0xd7ad56,
            metalness: 0.86,
            roughness: 0.29,
            envMapIntensity: 1.15,
        });
        const grain = document.createElement("canvas");
        grain.width = grain.height = 256;
        const gc = grain.getContext("2d");
        const gd = gc.createImageData(256, 256);
        let seed = 81419;
        for (let i = 0; i < gd.data.length; i += 4) {
            seed = (seed * 1664525 + 1013904223) >>> 0;
            const n = ((seed >>> 24) / 255 - 0.5) * 24;
            gd.data[i] = 201 + n;
            gd.data[i + 1] = 170 + n;
            gd.data[i + 2] = 128 + n;
            gd.data[i + 3] = 255;
        }
        gc.putImageData(gd, 0, 0);
        const grainTex = new THREE.CanvasTexture(grain);
        grainTex.colorSpace = THREE.SRGBColorSpace;
        grainTex.wrapS = grainTex.wrapT = THREE.RepeatWrapping;
        grainTex.repeat.set(4, 4);
        const powderMat = new THREE.MeshStandardMaterial({
            map: grainTex,
            color: 0xe6d3af,
            roughness: 1,
            metalness: 0,
        });
        const powderGeo = new THREE.LatheGeometry(
            [
                new THREE.Vector2(0, 5),
                new THREE.Vector2(28.6, 5),
                new THREE.Vector2(29.35, 8),
                new THREE.Vector2(29.35, 87),
                new THREE.Vector2(26, 89),
                new THREE.Vector2(18, 91),
                new THREE.Vector2(8, 92),
                new THREE.Vector2(0, 92.3),
            ],
            96
        );
        const shadowCanvas = document.createElement("canvas");
        shadowCanvas.width = shadowCanvas.height = 256;
        const sc = shadowCanvas.getContext("2d");
        const gr = sc.createRadialGradient(128, 128, 10, 128, 128, 123);
        gr.addColorStop(0, "rgba(42,42,28,.25)");
        gr.addColorStop(0.4, "rgba(42,42,28,.17)");
        gr.addColorStop(1, "rgba(42,42,28,0)");
        sc.fillStyle = gr;
        sc.fillRect(0, 0, 256, 256);
        const shadowMat = new THREE.MeshBasicMaterial({
            map: new THREE.CanvasTexture(shadowCanvas),
            transparent: true,
            depthWrite: false,
        });
        const jar = {};
        {
            const group = new THREE.Group();
            const body = new THREE.Mesh(bodyGeo, pet);
            body.name = "Supplied OBJ bottle, PET dimensions";
            group.add(body);
            const cap = new THREE.Mesh(capGeo, gold);
            cap.name = "Supplied OBJ cap, gold";
            group.add(cap);
            const label = new THREE.Mesh(
                labelGeo,
                new THREE.MeshBasicMaterial({
                    // Printed artwork must retain its sRGB ink colours under the studio lights.
                    map: texture,
                    color: 0xffffff,
                    toneMapped: false,
                    fog: false,
                    envMap: null,
                    side: THREE.DoubleSide,
                    transparent: false,
                    opacity: 1,
                    // Keep the thin label clear of PET surface depth artefacts at grazing angles.
                    polygonOffset: true,
                    polygonOffsetFactor: -1,
                    polygonOffsetUnits: -4,
                })
            );
            label.name = "Supplied OBJ label, remapped to 148.5 x 70 mm";
            group.add(label);
            const powder = new THREE.Mesh(powderGeo, powderMat);
            group.add(powder);
            const shadow = new THREE.Mesh(new THREE.PlaneGeometry(105, 90), shadowMat);
            shadow.rotation.x = -Math.PI / 2;
            shadow.position.y = -0.6;
            group.add(shadow);
            scene.add(group);
            Object.assign(jar, { group, label, powder });
        }
        function distance() {
            const aspect = stage.clientWidth / stage.clientHeight;
            return Math.max(225, 112 / (2 * Math.tan(THREE.MathUtils.degToRad(18)) * aspect));
        }
        function setView(which = "front") {
            const d = distance();
            controls.target.set(0, 61, 0);
            const a =
                {
                    front: 0,
                    back: Math.PI,
                    left: -Math.PI / 2,
                    right: Math.PI / 2,
                }[which] || 0;
            camera.position.set(Math.sin(a) * d, 81, Math.cos(a) * d);
            controls.update();
            controls.minPolarAngle = controls.maxPolarAngle = controls.getPolarAngle();
        }
        controls.enableZoom = false;
        controls.enablePan = false;
        controls.autoRotate = true;
        canvas.style.touchAction = "pan-y"; // vertical swipes scroll the page
        document
            .querySelectorAll("[data-view]")
            .forEach((b) => (b.onclick = () => setView(b.dataset.view)));
        $("reset").onclick = () => {
            controls.autoRotate = true;
            setView("front");
        };
        function resize() {
            renderer.setSize(stage.clientWidth, stage.clientHeight, false);
            camera.aspect = stage.clientWidth / stage.clientHeight;
            camera.updateProjectionMatrix();
        }
        new ResizeObserver(resize).observe(stage);
        resize();
        setView("front");
        $("loading").style.display = "none";
        window.__jarViewer = {
            renderer,
            scene,
            camera,
            controls,
            jar,
            texture,
            bodyGeo,
            capGeo,
            labelGeo,
            setView,
        };
        window.__ready = true;
        let last = 0;
        function animate(time) {
            requestAnimationFrame(animate);
            if (document.hidden || time - last < 1000 / 30) return;
            last = time;
            controls.update();
            renderer.render(scene, camera);
        }
        requestAnimationFrame(animate);
        canvas.addEventListener("webglcontextlost", (event) => {
            event.preventDefault();
            $("loading").style.display = "flex";
            $("loading").innerHTML =
                '<div class="error">The graphics context was interrupted. Reload the page to continue.</div>';
        });
    } catch (e) {
        console.error(e);
        $("loading").innerHTML =
            '<div class="error"><strong>3D preview could not start.</strong><br>Use a recent Chrome, Edge, Firefox or Safari browser with WebGL enabled.<br><small>' +
            String(e.message).replace(/[<>&]/g, "") +
            "</small></div>";
        window.__error = String(e.stack || e);
        // Embedded on the product page: ask it to show the photo instead.
        if (window.parent !== window) window.parent.postMessage("jar3d-error", location.origin);
    }
})();
