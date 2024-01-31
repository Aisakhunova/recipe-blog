<template>
    <div class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" v-if="showModal" @click.self="closeModal">
      <div class="bg-white p-8 rounded-md max-w-md h-100">
        <h2 class="text-2xl font-bold mb-4">{{ selectedRecipe.recipe.label }}</h2>
        <img :src="selectedRecipe.recipe.image" :alt="selectedRecipe.recipe.label" class="w-full h-40 object-cover object-center mb-4">
        <p class="text-gray-600">{{ selectedRecipe.recipe.calories}} {{ $t('calories') }}</p>
        

        <div class="mt-4">
        <h3 class="text-lg font-semibold mb-2">{{ $t('ingredients') }}</h3>
        <ul>
          <li v-for="(ingredient, index) in selectedRecipe.recipe.ingredientLines" :key="index" class="mb-2">{{ ingredient }}</li>
        </ul>
      </div>
  
        <button @click="closeModal" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">{{ $t('close') }}</button>
      </div>
    </div>
  </template>
  
  <script>
  import eventBus from "../../eventBus"
  export default {
    props: ['selectedRecipe', 'showModal'],
    methods: {
      closeModal() {
        this.$emit('close-modal');
      },
    },
    watch: {
    showModal(newVal) {
      if (newVal) {
        document.body.classList.add('modal-open');
      } else {
        document.body.classList.remove('modal-open');
      }
    }
  },
    created() {
    
    eventBus.on('languageChanged', (newLocale) => {

      this.$i18n.locale = newLocale;
    });
  },
  };
  </script>
  
  <style>
  .modal-open {
    overflow: hidden;
  }
  </style>
  