<template>
  <div class="h-screen flex flex-col justify-center items-center text-center px-4 md:px-0">
    <div class="my-4 md:my-12">
      <h1 class="text-2xl md:text-3xl">{{ $t('greeting') }}</h1>
      <h2 class="text-sm md:text-xl">{{ $t('description') }}</h2>
      <br>
      <h2 class="text-md md:text-xl">{{ $t('button') }}</h2>
      <br>

      <svg class="animate-bounce w-6 h-12 md:h-32 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
      </svg>

      <button class="mt-4 md:mt-8 px-2 md:px-4 py-1 md:py-2 bg-orange-300 border border-solid border-gray-800 hover:bg-orange-500 transition duration-300" @click="changeLanguage">
        {{ $t('buttonText')}}
      </button>
    </div>
  </div>

  <router-view />
</template>

<script>
import eventBus from '../../eventBus';

export default {
  methods: {
    changeLanguage() {
      const newLocale = this.$i18n.locale === 'en' ? 'ru' : 'en';
      this.$i18n.locale = newLocale;

      eventBus.emit('languageChanged', newLocale);
    },
  },
};
</script>

<style scoped>
</style>
