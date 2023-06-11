<template>
  <div class="bg-white text-black px-10 pb-10">
    <div class="container mx-auto">
      <h1 class="text-5xl mb-4 text-center mt-8">Portfolio</h1>

      <div v-for="(gallery, galleryKey) in portfolio" :key="galleryKey">
        <h2 class="text-3xl text-center mt-12">{{ gallery.title }}</h2>
        <div v-for="(subgallery, subgalleryKey) in gallery.subGalleries" :key="subgalleryKey">
          <h3 class="text-2xl mt-5 mb-2 text-center sm:text-left">{{ subgallery.title }}</h3>
          <gallery :gallery-i-d="subgallery.id" :images="subgallery.images"></gallery>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default defineNuxtComponent({
  async asyncData() {
    return {
      portfolio: await $fetch('/api/portfolio'),
    }
  },
})
</script>
