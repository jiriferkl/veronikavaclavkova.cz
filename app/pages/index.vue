<template>
  <div class="flex justify-center container mx-auto">
    <div class="flex flex-col justify-center items-center lg:items-start w-full px-5">
      <div class="absolute h-screen w-screen top-0 left-0 pt-5">
        <div ref="sceneElement" class="w-full lg:w-1/2 h-full float-right z-10"></div>
      </div>
      <h2 class="text-4xl mb-5 z-20 text-center">Grafický designer</h2>
      <h1 class="text-7xl mb-6 z-20 text-center">Veronika Václavková</h1>
      <p class="pl-1 text-xl text-center lg:text-left font-light z-20">
        Vítejte na mém portfóliu! Pokud se Vám něco z mé práce líbí, neváhejte mě kontaktovat.
      </p>
      <div class="flex flex-col md:flex-row">
        <NuxtLink to="/portfolio" class="z-20 md:ml-1 mt-8 border rounded p-3 border-white transition ease-out hover:bg-fuchsia-950 duration-200"><span><font-awesome-icon icon="fa-solid fa-palette" /></span> Přejít na portfólio</NuxtLink>
        <NuxtLink to="/resume" class="z-20 md:ml-3 mt-8 border rounded p-3 border-white transition ease-out hover:bg-fuchsia-950 duration-200"><span><font-awesome-icon icon="fa-solid fa-user-graduate" /></span> Přejít na životopis</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  Group,
  LineSegments,
  Mesh,
  OctahedronGeometry,
  LineBasicMaterial,
  MeshPhongMaterial,
  DoubleSide,
  PointLight
} from 'three';

import {ref, onMounted} from 'vue';

const sceneElement = ref(null);

onMounted(() => {
  const sceneWidth = sceneElement.value.offsetWidth;
  const sceneHeight = sceneElement.value.offsetHeight;

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, sceneWidth / sceneHeight, 0.1, 1000);
  camera.position.z = 250;

  const renderer = new WebGLRenderer({antialias: true});
  renderer.setSize(sceneWidth, sceneHeight);
  renderer.setClearColor(0x000000, 0);

  const spawn = (radius, detail) => {
    const geometry = new OctahedronGeometry(radius, detail);

    const group = new Group();
    group.add(new LineSegments(geometry, new LineBasicMaterial({color: 0xfce7f3, transparent: true, opacity: 0.1})));
    group.add(new Mesh(geometry, new MeshPhongMaterial({
      color: 0x4a044e,
      emissive: 0x072534,
      side: DoubleSide,
      flatShading: true
    })));
    scene.add(group);

    return group;
  }

  let group = null;
  if (window.innerWidth > 1000) {
    group = spawn(80, 1);
    group.position.set(-10, -5, 0)
  }

  const group2 = spawn(50, 1);
  group2.position.set(50, 120, 0)
  const group3 = spawn(40, 1);
  group3.position.set(60, -135, 0)
  const group4 = spawn(20, 1);
  group4.position.set(-50, 120, 0)
  const group5 = spawn(15, 1);
  group5.position.set(90, 50, 0)

  const lights = [];
  lights.push(new PointLight(0xffffff, 1, 0));
  lights.push(new PointLight(0xffffff, 0.6, 0));
  lights[0].position.set(50, 150, 500)
  lights[1].position.set(-100, -400, 150)

  lights.forEach((light) => scene.add(light));

  sceneElement.value.appendChild(renderer.domElement);

  function animate() {
    requestAnimationFrame(animate);

    if (group !== null) {
      group.rotation.x += 0.001;
      group.rotation.y += 0.001;
    }

    group2.rotation.x += 0.001;
    group2.rotation.y += 0.001;
    group3.rotation.x -= 0.001;
    group3.rotation.y += 0.001;
    group4.rotation.x -= 0.004;
    group4.rotation.y += 0.004;
    group5.rotation.x += 0.005;
    group5.rotation.y += 0.005;

    renderer.render(scene, camera);
  }

  animate();
});
</script>
