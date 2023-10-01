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
            id: "gallery2d-materials",
            title: "Propagační materiály",
            images: [
              {
                "src": "/portfolio/2d/propagacni_materialy/21022459.jpg",
                "width": 3232,
                "height": 2231
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/370.jpg",
                "width": 3000,
                "height": 2000
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/5800894.jpg",
                "width": 7162,
                "height": 4780
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/Bella_vizitka.jpg",
                "width": 3000,
                "height": 2000
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/DL2.jpg",
                "width": 2200,
                "height": 1400
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/VACLAVKOVA_VERONIKA_2G_PROPAGACE_01.jpg",
                "width": 3508,
                "height": 4961
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/VACLAVKOVA_VERONIKA_2G_PROPAGACE_02.jpg",
                "width": 3508,
                "height": 4961
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/VACLAVKOVA_VERONIKA_2G_PROPAGACE_03.jpg",
                "width": 4961,
                "height": 3508
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/VM_papir.jpg",
                "width": 3199,
                "height": 2262
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/VM_vizitka.jpg",
                "width": 3000,
                "height": 2000
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/WOODINI.jpg",
                "width": 5000,
                "height": 3750
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/cafe.jpg",
                "width": 5000,
                "height": 4480
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/dl.jpg",
                "width": 2200,
                "height": 1400
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/dl_leaflet_mockup_01.jpg",
                "width": 4000,
                "height": 3000
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/helcavizitka.jpg",
                "width": 3200,
                "height": 2400
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/kniha.jpg",
                "width": 3600,
                "height": 2400
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/m001t114_feb2122_view_04.jpg",
                "width": 4000,
                "height": 2250
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/manual_loga.jpg",
                "width": 3000,
                "height": 2250
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/multikulturni_tyden_veronika_vaclavkova.jpg",
                "width": 2481,
                "height": 3509
              },
              {
                "src": "/portfolio/2d/propagacni_materialy/vasmedic_logo.jpg",
                "width": 3600,
                "height": 2400
              }
            ],
          },
          {
            id: "gallery2d-digital-paint",
            title: "Digitální kresba",
            images: [
              {
                "src": "/portfolio/2d/digitalni_kresba/Bez_nazvu-2.jpg",
                "width": 4961,
                "height": 3508
              },
              {
                "src": "/portfolio/2d/digitalni_kresba/Buffy_okno_konecna.jpg",
                "width": 2480,
                "height": 3508
              },
              {
                "src": "/portfolio/2d/digitalni_kresba/Flicek_upravy.jpg",
                "width": 3508,
                "height": 2480
              },
              {
                "src": "/portfolio/2d/digitalni_kresba/Harry_Potter_fotomontaz2.jpg",
                "width": 1050,
                "height": 700
              },
              {
                "src": "/portfolio/2d/digitalni_kresba/Miky.jpg",
                "width": 3508,
                "height": 2480
              },
              {
                "src": "/portfolio/2d/digitalni_kresba/tulipan.jpg",
                "width": 2480,
                "height": 3508
              },
              {
                "src": "/portfolio/2d/digitalni_kresba/tucnacik.jpg",
                "width": 1755,
                "height": 1241
              },
              {
                "src": "/portfolio/2d/digitalni_kresba/zmrzlina.jpg",
                "width": 1241,
                "height": 1754
              },
            ],
          },
        ],
      },
    }
  }
})
</script>
