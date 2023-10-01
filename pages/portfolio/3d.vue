<template>
  <div class="bg-white text-black px-10 pb-10">
    <div class="container mx-auto">
      <h1 class="text-5xl mb-4 text-center mt-8">Portfolio</h1>
      <PortfolioNav />

      <div v-for="(subgallery, subgalleryKey) in portfolio.subGalleries" :key="subgalleryKey">
        <h3 class="text-2xl mt-5 mb-2 text-center sm:text-left">{{ subgallery.title }}</h3>
        <gallery :gallery-i-d="subgallery.id" :images="subgallery.images"></gallery>
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  data() {
    return {
      portfolio: {
        subGalleries: [
          {
            id: "gallery3d-cervena-lhota",
            title: "Červená Lhota",
            images: [
              {
                src: '/portfolio/3d/cervena_lhota/cervenalhota.jpg',
                width: 3840,
                height: 2160,
              },
              {
                src: '/portfolio/3d/cervena_lhota/cervenalhota2.jpg',
                width: 3840,
                height: 2160,
              },
              {
                src: "/portfolio/3d/cervena_lhota/cervenalhota3.jpg",
                width: 3840,
                height: 2160,
              },
              {
                src: "/portfolio/3d/cervena_lhota/cervenalhota4.jpg",
                width: 3840,
                height: 2160,
              },
              {
                src: "/portfolio/3d/cervena_lhota/cervenalhotahmenu.jpg",
                width: 3840,
                height: 2160,
              },
              {
                src: "/portfolio/3d/cervena_lhota/cervenalhotahmenu2.jpg",
                width: 3840,
                height: 2160,
              },
              {
                src: "/portfolio/3d/cervena_lhota/nadvori.jpg",
                width: 1403,
                height: 992,
              },
              {
                src: "/portfolio/3d/cervena_lhota/okna.png",
                width: 1005,
                height: 418,
              },
              {
                src: "/portfolio/3d/cervena_lhota/zamekcervenalhota.png",
                width: 1123,
                height: 794,
              },
              {
                src: "/portfolio/3d/cervena_lhota/zamekcervenalhota2.png",
                width: 1123,
                height: 794,
              },
              {
                src: "/portfolio/3d/cervena_lhota/zamekcervenalhota3.png",
                width: 1123,
                height: 794,
              },
            ],
          },
          {
            id: "gallery3d-bonfire",
            title: "Bonfire",
            images: [
              {
                src: '/portfolio/3d/bonfire/fire.jpg',
                width: 1280,
                height: 720,
              },
              {
                src: '/portfolio/3d/bonfire/fire2.jpg',
                width: 1920,
                height: 1080,
              },
            ],
          },
          {
            id: "gallery3d-scooter",
            title: "Koloběžka",
            images: [
              {
                src: '/portfolio/3d/kolobezka/kolobezka2.png',
                width: 1123,
                height: 794,
              },
              {
                src: '/portfolio/3d/kolobezka/kolobezka3.png',
                width: 1123,
                height: 794,
              },
              {
                src: '/portfolio/3d/kolobezka/kolobezka.jpg',
                width: 1199,
                height: 674,
              },
            ],
          },
          {
            id: "gallery3d-mike",
            title: "Mike",
            images: [
              {
                src: '/portfolio/3d/mike/mike.png',
                width: 1123,
                height: 794,
              },
              {
                src: '/portfolio/3d/mike/mike2.png',
                width: 1123,
                height: 794,
              },
              {
                src: '/portfolio/3d/mike/mike3.png',
                width: 1123,
                height: 794,
              },
            ],
          },
          {
            id: "gallery3d-ring",
            title: "Prsten",
            images: [
              {
                src: '/portfolio/3d/ring/ring.jpg',
                width: 1280,
                height: 720,
              },
              {
                src: '/portfolio/3d/ring/ring2.jpg',
                width: 1280,
                height: 720,
              },
              {
                src: '/portfolio/3d/ring/ring4.jpg',
                width: 1280,
                height: 720,
              },
            ],
          },
          {
            id: "gallery3d-well",
            title: "Studna",
            images: [
              {
                src: '/portfolio/3d/well/well.jpg',
                width: 1920,
                height: 1080,
              },
              {
                src: '/portfolio/3d/well/well2.png',
                width: 1123,
                height: 794,
              },
              {
                src: '/portfolio/3d/well/well3.png',
                width: 1123,
                height: 794,
              },
              {
                src: '/portfolio/3d/well/well4.png',
                width: 1123,
                height: 794,
              },
              {
                src: '/portfolio/3d/well/well5.png',
                width: 1123,
                height: 794,
              },
            ],
          },
        ],
      },
    }
  }
})
</script>
