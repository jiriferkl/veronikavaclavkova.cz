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
            id: "galleryPhoto-arch",
            title: "Architektura",
            images: [
              {
                "src": "/portfolio/fotografovani/architektura/Arco_de_Triunfo.jpg",
                "width": 4685,
                "height": 3123
              },
              {
                "src": "/portfolio/fotografovani/architektura/Cesta_z_metra.jpg",
                "width": 4837,
                "height": 3225
              },
              {"src": "/portfolio/fotografovani/architektura/DSC_1357.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/architektura/Montiuc.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/architektura/NY.jpg", "width": 4000, "height": 6000},
              {"src": "/portfolio/fotografovani/architektura/NY_obchodak.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/architektura/V_oblacich.jpg", "width": 5407, "height": 3605},
              {"src": "/portfolio/fotografovani/architektura/chodba.jpg", "width": 4577, "height": 3051},
              {"src": "/portfolio/fotografovani/architektura/domecky.jpg", "width": 5762, "height": 3841},
              {"src": "/portfolio/fotografovani/architektura/jesus.jpg", "width": 5232, "height": 3488},
              {"src": "/portfolio/fotografovani/architektura/pariz.jpg", "width": 5232, "height": 3488},
              {"src": "/portfolio/fotografovani/architektura/socha.jpg", "width": 5232, "height": 3488},
              {"src": "/portfolio/fotografovani/architektura/veze.jpg", "width": 5294, "height": 3529},
              {"src": "/portfolio/fotografovani/architektura/zare.jpg", "width": 6000, "height": 4000},
            ],
          },
          {
            id: "galleryPhoto-people",
            title: "Lidé",
            images: [
              {"src": "/portfolio/fotografovani/lide/Boticky.jpg", "width": 5232, "height": 3488},
              {"src": "/portfolio/fotografovani/lide/DSC_0469.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/lide/Detska_tvar.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/lide/Pestrobarevny_svet.jpg", "width": 1600, "height": 1067},
              {"src": "/portfolio/fotografovani/lide/jiri.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/lide/kone1.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/lide/kone2.jpg", "width": 3291, "height": 4937},
              {"src": "/portfolio/fotografovani/lide/kone3.jpg", "width": 5705, "height": 3803},
              {"src": "/portfolio/fotografovani/lide/laska.jpg", "width": 1600, "height": 1067},
              {"src": "/portfolio/fotografovani/lide/priroda.jpg", "width": 1600, "height": 1067},
            ],
          },
          {
            id: "galleryPhoto-nature",
            title: "Příroda",
            images: [
              {"src": "/portfolio/fotografovani/priroda/bila.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/priroda/divna_orch.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/priroda/hrusky.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/priroda/kmen.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/priroda/kolousek.jpg", "width": 5676, "height": 3784},
              {"src": "/portfolio/fotografovani/priroda/kreta.jpg", "width": 5474, "height": 3649},
              {"src": "/portfolio/fotografovani/priroda/kvety.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/priroda/les.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/priroda/modry_ptak.jpg", "width": 5048, "height": 3365},
              {"src": "/portfolio/fotografovani/priroda/oranzovy.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/priroda/orch.jpg", "width": 4696, "height": 3131},
              {"src": "/portfolio/fotografovani/priroda/ptak.jpg", "width": 5072, "height": 3381},
              {"src": "/portfolio/fotografovani/priroda/ruzova.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/priroda/skala.jpg", "width": 4000, "height": 6000},
              {"src": "/portfolio/fotografovani/priroda/strom.jpg", "width": 4000, "height": 6000},
            ],
          },
          {
            id: "galleryPhoto-animals",
            title: "Zvířata",
            images: [
              {"src": "/portfolio/fotografovani/zvirata/buffy.jpg", "width": 5690, "height": 3793},
              {"src": "/portfolio/fotografovani/zvirata/kocky.jpg", "width": 4000, "height": 6000},
              {"src": "/portfolio/fotografovani/zvirata/kote.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/zvirata/meduza.jpg", "width": 5573, "height": 3715},
              {"src": "/portfolio/fotografovani/zvirata/miky.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/zvirata/nofishing.jpg", "width": 5327, "height": 3551},
              {"src": "/portfolio/fotografovani/zvirata/pes.jpg", "width": 5657, "height": 3771},
              {"src": "/portfolio/fotografovani/zvirata/ptacek.jpg", "width": 5565, "height": 3710},
              {"src": "/portfolio/fotografovani/zvirata/ptak_nebe.jpg", "width": 5795, "height": 3863},
              {"src": "/portfolio/fotografovani/zvirata/tucnak.jpg", "width": 6000, "height": 4000},
            ],
          },
          {
            id: "galleryPhoto-still",
            title: "Zátiší",
            images: [
              {"src": "/portfolio/fotografovani/zatisi/lebky.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/zatisi/sluchatka.jpg", "width": 5574, "height": 3716},
              {"src": "/portfolio/fotografovani/zatisi/svetla1.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/zatisi/svetla2.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/zatisi/svetla3.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/zatisi/svetla4.jpg", "width": 5499, "height": 3666},
              {"src": "/portfolio/fotografovani/zatisi/svicka2.jpg", "width": 5615, "height": 3743},
              {"src": "/portfolio/fotografovani/zatisi/svicka3.jpg", "width": 3525, "height": 5287},
              {"src": "/portfolio/fotografovani/zatisi/svicka4.jpg", "width": 5491, "height": 3660},
              {"src": "/portfolio/fotografovani/zatisi/svicka5.jpg", "width": 5673, "height": 3782},
              {"src": "/portfolio/fotografovani/zatisi/svicka7.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/zatisi/svicla6.jpg", "width": 6000, "height": 4000},
              {"src": "/portfolio/fotografovani/zatisi/svocla1.jpg", "width": 5755, "height": 3837},
            ],
          },
        ],
      },
    }
  }
})
</script>
