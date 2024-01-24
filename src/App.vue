<!-- src/App.vue -->
<template>
  <div id="app m-0 p-0">
    <div class="bg-blue-200 h-20 flex font-semibold align-center justify-around">
      <h4 class="bg-blue-300 h-12 mr-16 mt-4"> Edamam API </h4>
      <div class="flex align-center justify-between">
        <router-link to="/" class="mt-4 mr-16 p-2 h-12  hover:text-white transition duration-300 rounded-lg flex justify-center align-center"><div class="h-0 ">{{ $t('home') }}</div></router-link>
      <router-link to="/posts" class=" mt-4 mr-16 h-12 p-2 hover:text-white  transition duration-300 rounded-lg flex justify-center align-center"><div class="h-0">{{ $t('posts') }}</div></router-link>
      <router-link to="/search" class=" mt-4 mr-16 h-12 p-2  hover:text-white  transition duration-300 rounded-lg flex justify-center align-center">{{ $t('search') }}</router-link>
      </div> 
    </div>

    <router-view />
    
  </div>
</template>

<script>
import eventBus from './eventBus';
export default {
  name: "App",
  created() {
    eventBus.on('languageChanged', (newLocale) => {
      this.$i18n.locale = newLocale;
    });
  },
};
</script>

<style>

</style>
