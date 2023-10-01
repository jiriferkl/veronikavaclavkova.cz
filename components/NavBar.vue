<template>
  <div class="p-4 px-10 z-10">
    <div class="flex flex-row justify-between items-center mb-1">
      <NuxtLink @click="toggle = false" to="/"><img src="/logo.svg" alt="logo" class="h-12"></NuxtLink>
      <Nav @click="toggle = false" class="hidden sm:block"/>
      <a @click.prevent="toggle = !toggle" class="block sm:hidden cursor-pointer"><font-awesome-icon icon="fa-solid fa-bars"/></a>
    </div>
    <Transition>
      <Nav @click="toggle = false" v-show="toggle" class="sm:hidden flex flex-col overflow-hidden" />
    </Transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggle: false
    }
  }
}
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: max-height 0.5s ease;
}

.v-enter-to,
.v-leave-from{
  max-height: 120px;
}

.v-enter-from,
.v-leave-to {
  max-height: 0;
}
</style>
