
<template>
  <div>
    
    


    <div class="h-100 mt-52 flex flex-col align-center items-center text-5xl">
      <h1>{{ $t('greeting') }}</h1>
      <h2> {{ $t('description') }}</h2> <br> <br>
      <h2>{{ $t('button') }}</h2>

      <br> <br>
      


<svg class="animate-bounce w-6 h-32 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1"/>
  </svg>

  <!-- <label class="relative inline-flex items-center cursor-pointer">
  <input type="checkbox" value="" class="sr-only peer">
  <div class="w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Russian</span>
</label> -->
<button class="border border-solid border-gray-800 bg-orange-300 p-8 hover:bg-orange-500" @click="changeLanguage"> {{ $t('buttonText')}}</button>
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
  }
};

</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
