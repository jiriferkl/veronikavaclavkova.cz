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
  async asyncData() {
    return {
      experience: await $fetch('/api/experience'),
      education: await $fetch('/api/education')
    }
  },
  data() {
    return {
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
