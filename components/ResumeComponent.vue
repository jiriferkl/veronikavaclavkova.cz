<template>
  <div id="resumeForPrint" class="container mx-auto max-w-6xl flex flex-col-reverse lg:flex-row border print:flex-row relative">
    <slot name="top"></slot>
    <div class="lg:w-1/3 bg-slate-800 text-white p-6">
      <div class="flex justify-center mt-5">
        <ResumeImage />
      </div>
      <h3 class="ml-1 mt-5 mb-2 font-bold border-b pb-1">Kontakt</h3>
      <div>
        <div v-for="(contact, index) in contactInfo" :key="index" class="flex mb-2">
          <div class="flex items-center justify-center w-7 pt-0.5">
            <font-awesome-icon :icon="contact.icon" />
          </div>
          <div class="flex items-center justify-center">
            <a :href="contact.url" target="_blank">{{ contact.shortUrl }}</a>
          </div>
        </div>
      </div>
      <h3 class="ml-1 mt-5 mb-2 font-bold border-b pb-1">Hlavní zaměření</h3>
      <div class="ml-1 flex flex-col flex-wrap">
        <div v-for="(core, index) in coreSkills" :key="index" class="mr-2">
          {{ core }}
        </div>
      </div>
      <h3 class="ml-1 mt-5 mb-2 font-bold border-b pb-1">Dále ovládám</h3>
      <div class="ml-1 flex flex-col flex-wrap">
        <div v-for="(secondary, index) in secondarySkills" :key="index" class="mr-2">
          {{ secondary }}
        </div>
      </div>
      <h3 class="ml-1 mt-5 mb-2 font-bold border-b pb-1">Zvládnu</h3>
      <div class="ml-1 flex flex-col flex-wrap">
        <div v-for="(tertiary, index) in tertiarySkills" :key="index" class="mr-2">
          {{ tertiary }}
        </div>
      </div>
      <h3 class="ml-1 mt-5 mb-2 font-bold border-b pb-1">Jazyky</h3>
      <div class="flex flex-col">
        <div v-for="(language, index) in languages" :key="index" class="flex ml-1">
          <div class="w-20 font-semibold">
            {{ language.title }}
          </div>
          <div class="font-light">
            {{ language.level }}
          </div>
        </div>
      </div>
      <h3 class="ml-1 mt-7 mb-2 font-bold border-b pb-1">Schopnosti</h3>
      <div>
        <div v-for="(skill, index) in skills" :key="index" class="flex">
          <div class="flex justify-center items-center w-8">
            <font-awesome-icon :icon="skill.icon" />
          </div>
          <div class="flex">
            {{ skill.title }}
          </div>
        </div>
      </div>
      <h3 class="ml-1 mt-7 mb-2 font-bold border-b pb-1">Koníčky</h3>
      <div class="grid grid-cols-2 gap-1.5">
        <div v-for="(hobby, index) in hobbies" :key="index" class="flex">
          <div class="flex justify-center items-center w-8">
            <font-awesome-icon :icon="hobby.icon" />
          </div>
          <div class="flex">
            {{ hobby.title }}
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col lg:w-2/3 p-6">
      <div class="ml-3">
        <h1 class="text-3xl font-semibold">Veronika Václavková</h1>
        <h2 class="text-2xl font-light">Grafický designer</h2>
      </div>
      <div>
        <h2 class="text-2xl m-3 border-b-2 border-black pb-0.5">Zkušenosti</h2>
        <ResumeCard
            v-for="item in experience"
            :logo="item.logo ?? '/companies/general.svg'"
            :position="item.position"
            :company="item.company"
            :years="item.years"
            :place="item.place"
            :description="item.description"
            :badges="item.badges"
            :url="item.url"
        />
      </div>
      <div>
        <h2 class="text-2xl m-3 border-b-2 border-black pb-0.5">Vzdělání</h2>
        <ResumeCard
            v-for="item in education"
            :logo="item.logo"
            :position="item.title"
            :company="item.subtitle"
            :years="item.years"
            :place="item.place"
            :description="item.description"
            :badges="item.badges"
            :url="item.url"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  data() {
    return {
      experience: [
        {
          "position": "3D publikátor",
          "years": "12.2023 - současnost",
          "place": "Praha",
          "url": "https://3d-mon.com/",
          "company": "3Demon",
          "description": [
            "Ve firmě pracuji na pozici 3D publikátor. Zabývám se především texturováním a renderováním 3D objektů. Dále se věnuji fotografování, postprocesingu a publikování modelů na webu.",
          ],
          "badges": [],
          "logo": "/companies/3demon.png"
        },
        {
          "position": "Člen marketingového týmu",
          "years": "8.2021 - 9.2023",
          "place": "Pardubice",
          "url": "https://www.dfmarketing.cz/",
          "company": "DF marketing",
          "description": [
            "Ve firmě DF Marketing jsem byla členem marketingového týmu. Podílela jsem se na velké části celého procesu od statistik, korektur článků až po SEO.",
          ],
          "badges": [],
          "logo": "/companies/df.png"
        },
        {
          "position": "Grafik Junior",
          "years": "1.2015 - současnost",
          "place": "Pardubice",
          "company": "",
          "description": [
            "Už od roku 2015 tvořím loga a plakáty, návrhy webů a jiné grafické práce.",
          ],
          "badges": [],
          "logo": "/companies/palette.svg",
        },
        {
          "position": "Uvaděčka",
          "years": "9.2019 - 7.2021",
          "place": "Pardubice",
          "url": "https://www.vcd.cz/",
          "company": "Východočeské divadlo Pardubice",
          "description": [
            "Ve východočeském divadle Pardubice jsem pracovala jako uvaděčka a šatnářka 2 divadelní sezóny.",
          ],
          "badges": [],
          "logo": "/companies/vcd.jpg"
        },
        {
          "position": "Brigády",
          "years": "1.2015 - 12.2021",
          "place": "Žamberk, Klášterec nad Orlicí, Hylváty",
          "company": "Různé",
          "description": [
            "Táborová vedoucí, zdravotní sestra v zubní ordinaci a další menší brigády.",
            "Jako zdravotní sestra jsem vypomáhala v zubní ordinaci doktorky MDDr. Simony Pavlové.",
            "Od roku 2019 do roku 2021 jsem dělala táborovou vedoucí na příměstském táboře Animo v Klášterci nad Orlicí a také na příměstském táboře Jezdecká škola Hylváty",
          ],
          "badges": [],
          "logo": null,
        },
      ],
      education: [
        {
          "years": "2019 - 2023",
          "place": "Pardubice",
          "url": "http://spse.cz/",
          "title": "Střední průmyslová škola elektrotechnická a Vyšší odborná škola Pardubice",
          "subtitle": "Grafika a webdesing",
          "description": [
            "Během studia na vysoké škole jsem začala navštěvovat střední školu s oborem zaměřeným na grafiku a webdesign."
          ],
          "badges": [],
          "logo": "/schools/spse.png"
        },
        {
          "years": "2017 - 2021",
          "place": "Opava",
          "url": "http://www.slu.cz",
          "title": "Slezská univerzita v Opavě",
          "subtitle": "Multimediální techniky",
          "description": [
            "Už během studia střední školy jsem zjistila, že se chci vydat jiným směrem. Na vysoké škole jsem se zaměřila na grafický design a práci produkční.",
            "Během tohoto studia jsem získala velké zkušenosti na několika projekech. Největší zkušeností byla práce na dokumentu Perkův dalekohled a nebo výhra v soutěži 48 Hour Film Project Brno 2018. Tento vítězný snímek dále postoupil na filmový festival do Orlanda, kterého jsem se zúčastnila.",
          ],
          "badges": [],
          "logo": "/schools/slu.jpg"
        },
        {
          "years": "2013 - 2017",
          "place": "Ústí nad Orlicí",
          "url": "https://www.szsuo.cz/",
          "title": "Vyšší odborná škola a střední škola zdravotnická a sociální Ústí nad Orlicí",
          "subtitle": "Zdravotnický asistent",
          "description": [
            "Po základní škole jsem se rozhodla nastoupit na zdravotní školu, abych se stala zdravotní sestrou.",
          ],
          "badges": [],
          "logo": "/schools/szs.png",
        },
      ],
      contactInfo: [
        {
          icon: "fa-solid fa-paperclip",
          url: "mailto:veronika.vaclavkova@protonmail.com",
          shortUrl: "veronika.vaclavkova@protonmail.com",
        },
        {
          icon: "fa-brands fa-linkedin-in",
          url: "https://www.linkedin.com/in/veronikavaclavkova/",
          shortUrl: "veronikavaclavkova",
        },
      ],
      coreSkills: [
        '3D Studio Max',
        'Substance 3D Painter',
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Adobe InDesign',
        'Unity',
        'Figma',
        'UI/UX',
      ],
      secondarySkills: [
        'Adobe Animate',
        'Adobe After Effect',
        'Adobe Premiere Pro',
        'Adobe Audition',
        'DaVinci Resolve',
      ],
      tertiarySkills: [
        'Blender',
        'HTML',
        'CSS',
        'Boostrap',
        'Microsoft Word',
        'Microsoft Excel',
      ],
      languages: [
        {
          title: 'Čeština',
          level: 'Rodilý mluvčí'
        },
        {
          title: 'Angličtina',
          level: 'A2'
        }
      ],
      skills: [
        {
          icon: 'fa-solid fa-car',
          title: 'Řidíčský průkaz'
        }
      ],
      hobbies: [
        {
          icon: 'fa-solid fa-horse',
          title: 'Koně'
        },
        {
          icon: 'fa-brands fa-playstation',
          title: 'Playstation'
        },
        {
          icon: 'fa-solid fa-plane-departure',
          title: 'Cestování'
        },
        {
          icon: 'fa-solid fa-tv',
          title: 'Filmy'
        },
        {
          icon: 'fa-solid fa-person-swimming',
          title: 'Plavání'
        },
        {
          icon: 'fa-solid fa-baseball',
          title: 'Tenis'
        },
        {
          icon: 'fa-solid fa-person-hiking',
          title: 'Tůry'
        },
        {
          icon: 'fa-brands fa-spotify',
          title: 'Hudba'
        },
      ]
    }
  }
})
</script>
