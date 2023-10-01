<template>
  <div class="bg-white text-black px-10 pb-10">
    <div class="container mx-auto">
      <h1 class="text-5xl mb-4 text-center mt-8">Portfolio</h1>
      <PortfolioNav />

      <div v-for="(subgallery, subgalleryKey) in portfolio.subGalleries" :key="subgalleryKey">
        <h3 class="text-2xl mt-5 mb-2 text-center sm:text-left">{{ subgallery.title }}</h3>
        <h3 class="text-xl text-center sm:text-left">{{ subgallery.subtitle }}</h3>
        <div v-if="subgallery.info" class="flex my-2 bg-blue-50 p-3 text-blue-900 rounded w-fit text-sm sm:text-base">
          <div class="mr-1">
            <font-awesome-icon icon="fa-solid fa-circle-info" />
          </div>
          <div v-html="subgallery.info"></div>
        </div>
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
            id: "gallery2d-tauslova",
            title: "Propagační materiály",
            subtitle: "Mateřská škola Taušlova",
            info: "<a href='https://www.tauslovka.cz/' target='_blank'>https://www.tauslovka.cz/</a>",
            images: [
              {
                "src": "/portfolio/2d/propagacni_materialy/5800894.jpg",
                "width": 7162,
                "height": 4780
              },
            ],
          },
          {
            id: "gallery2d-spse",
            subtitle: "SPŠE Pardubice",
            info: "<a href='https://www.spse.cz/' target='_blank'>https://www.spse.cz/</a>",
            images: [
              {
                "src": "/portfolio/2d/propagacni_materialy/m001t114_feb2122_view_04.jpg",
                "width": 4000,
                "height": 2250
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
                "src": "/portfolio/2d/propagacni_materialy/DL2.jpg",
                "width": 2200,
                "height": 1400
              },
            ],
          },
          {
            id: "gallery2d-gamespace",
            subtitle: "Game Space",
            info: "Jedná se o fiktivní společnost. Je tu zde pro ukázku mých schopností.",
            images: [
              {
                "src": "/portfolio/2d/gamespace/web_gamespace.png",
                "width": 4736,
                "height": 2659
              },
              {
                "src": "/portfolio/2d/gamespace/gamespace_logo_1.jpg",
                "width": 3000,
                "height": 1800
              },
              {
                "src": "/portfolio/2d/gamespace/gamespace_logo_2.jpg",
                "width": 3000,
                "height": 1800
              },
              {
                "src": "/portfolio/2d/gamespace/gamespace_logo_3.jpg",
                "width": 3962,
                "height": 2835
              },
              {
                "src": "/portfolio/2d/gamespace/gamespace_logo_4.jpg",
                "width": 3962,
                "height": 2835
              },
              {
                "src": "/portfolio/2d/gamespace/insta_post_gamespace_1_mock.jpg",
                "width": 2083,
                "height": 2083
              },
              {
                "src": "/portfolio/2d/gamespace/insta_post_gamespace_1_mock_up.jpg",
                "width": 2083,
                "height": 2083
              },
              {
                "src": "/portfolio/2d/gamespace/banner_gamespace_mock_up_2.jpg",
                "width": 5000,
                "height": 3400
              },
              {
                "src": "/portfolio/2d/gamespace/banner_gamespace_mock_up.jpg",
                "width": 3456,
                "height": 5184
              },
              {
                "src": "/portfolio/2d/gamespace/banner_gamespace.jpg",
                "width": 6666,
                "height": 14999
              },
              {
                "src": "/portfolio/2d/gamespace/insta_post_gamespace_1.jpg",
                "width": 1080,
                "height": 1080
              },
              {
                "src": "/portfolio/2d/gamespace/insta_post_gamespace_2.jpg",
                "width": 1080,
                "height": 1080
              },
            ],
          },
          {
            id: "gallery2d-jak-cestovat",
            subtitle: "Jak cestovat",
            info: "Jedná se o fiktivní společnost. Je tu zde pro ukázku mých schopností.",
            images: [
              {
                "src": "/portfolio/2d/jak_cestovat/web2.jpg",
                "width": 5000,
                "height": 3337
              },
              {
                "src": "/portfolio/2d/jak_cestovat/web.jpg",
                "width": 4736,
                "height": 2659
              },
              {
                "src": "/portfolio/2d/jak_cestovat/banner_mock_up_jak_cestovat.jpg",
                "width": 5000,
                "height": 3000
              },
              {
                "src": "/portfolio/2d/jak_cestovat/insta_post.jpg",
                "width": 3000,
                "height": 3000
              },
              {
                "src": "/portfolio/2d/jak_cestovat/banner_jak_cestovat_2.jpg",
                "width": 5000,
                "height": 3055
              },
              {
                "src": "/portfolio/2d/jak_cestovat/logo_jak_cestovat_1.jpg",
                "width": 3600,
                "height": 2400
              },
              {
                "src": "/portfolio/2d/jak_cestovat/logo_jak_cestovat_3.jpg",
                "width": 3500,
                "height": 2100
              },
              {
                "src": "/portfolio/2d/jak_cestovat/insta_post_jak_cestovat_1.jpg",
                "width": 1080,
                "height": 1080
              },
              {
                "src": "/portfolio/2d/jak_cestovat/banner_jak_cestovat.jpg",
                "width": 6666,
                "height": 14999
              },
              {
                "src": "/portfolio/2d/jak_cestovat/insta_post_jak_cestovat_2.jpg",
                "width": 1080,
                "height": 1080
              },
            ],
          },
          {
            id: "gallery2d-materials",
            subtitle: "Ostatní",
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
                "src": "/portfolio/2d/propagacni_materialy/Bella_vizitka.jpg",
                "width": 3000,
                "height": 2000
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
