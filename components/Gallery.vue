<template>
  <div :id="galleryID" class="flex flex-wrap justify-center sm:justify-start">
    <a
        v-for="(image, key) in imagesData"
        :key="key"
        :href="image.src"
        :data-pswp-width="image.width"
        :data-pswp-height="image.height"
        target="_blank"
        rel="noreferrer"
    >
      <nuxt-img :src="image.src" height="150" sizes="sm:300px md:200px lg:200px" class="m-1 transition ease-in-out hover:scale-105 duration-150"/>
    </a>
  </div>
</template>

<script>
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';

export default {
  props: {
    galleryID: String,
    images: Array,
  },
  setup(props) {
    return {
      imagesData: props.images,
    };
  },
  mounted() {
    if (!this.lightbox) {
      this.lightbox = new PhotoSwipeLightbox({
        gallery: '#' + this.$props.galleryID,
        children: 'a',
        pswpModule: () => import('photoswipe'),
      });
      this.lightbox.init();
    }
  },
  unmounted() {
    if (this.lightbox) {
      this.lightbox.destroy();
      this.lightbox = null;
    }
  },
};
</script>
