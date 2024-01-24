<template>
  <div id="app" class="m-0 p-0">
    <div class="bg-blue-200 md:h-20 sm:h-auto flex font-semibold flex-col sm:flex-row items-center justify-around">
      <h4 class="bg-blue-300 h-12 sm:h-auto md:mr-16 mt-4 mb-2 sm:mb-0">{{ $t('edamamAPI') }}</h4>
      <div class="flex flex-col sm:flex-row items-center justify-around">
        <router-link to="/" class="mt-2 sm:mt-4 mr-2 sm:mr-16 p-2 h-12 hover:text-white transition duration-300 rounded-lg flex justify-center items-center">
          {{ $t('home') }}
        </router-link>
        <router-link to="/posts" class="mt-2 sm:mt-4 mr-2 sm:mr-16 p-2 h-12 hover:text-white transition duration-300 rounded-lg flex justify-center items-center">
          {{ $t('posts') }}
        </router-link>
        <router-link to="/search" class="mt-2 sm:mt-4 mr-2 sm:mr-16 p-2 h-12 hover:text-white transition duration-300 rounded-lg flex justify-center items-center">
          {{ $t('search') }}
        </router-link>
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

<style scoped>
</style>
