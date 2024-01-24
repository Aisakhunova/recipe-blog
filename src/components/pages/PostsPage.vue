
<template>
  <div id="app" class="p-8">
    <h1 class="text-2xl font-bold mb-4">{{ $t('chickenRecipes') }}</h1>
    <div v-if="loading" class="text-center mt-4">
      <button type="button" class="" disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        {{ $t('loading') }}
      </button>
    </div>

    <div class="flex flex-wrap -mx-4">
      <recipe-card v-for="(recipe, index) in chickenRecipes" :key="index" :recipe="recipe" @click="openModal(recipe)" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"></recipe-card>
    </div>
  </div>

  <div class="">
    <h1 class="text-2xl font-bold mb-4">{{ $t('beefRecipes') }}</h1>
    <div v-if="loading" class="text-center mt-4">
      <button type="button" class="" disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        {{ $t('loading') }}
      </button>
    </div>

    <div class="flex flex-wrap -mx-4">
      <recipe-card v-for="(recipe, index) in beefrecipes" :key="index" :recipe="recipe" @click="openModal(recipe)" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"></recipe-card>
    </div>
  </div>

  <recipe-modal :selected-recipe="selectedRecipe" :show-modal="modalVisible" @close-modal="closeModal"></recipe-modal>
</template>

<script>

import RecipeCard from './RecipeCard.vue';
import RecipeModal from "./RecipeModal.vue"
import axios from 'axios';

import eventBus from "../../eventBus"

export default {
  components: {
    'recipe-card': RecipeCard,
    'recipe-modal': RecipeModal,
  },
  data() {
    return {
      chickenRecipes: [],
      beefrecipes: [],
      selectedRecipe: null,
      modalVisible: false,
      loading: true,
    };
  },
  mounted() {
    this.fetchChickenRecipes();
    this.fetchBeefRecipes();
  },
  created() {
    eventBus.on('languageChanged', (newLocale) => {

      this.$i18n.locale = newLocale;
    });
  },
  methods: {
    async fetchChickenRecipes() {
      try {
        const app_id = "c0f59f00";
        const app_key = "a733c1babf786123172c50cd769f573a";
        const response = await axios.get(`https://api.edamam.com/search?q="chicken"&app_id=${app_id}&app_key=${app_key}`);
        
        this.chickenRecipes = response.data.hits;
        console.log(this.chickenRecipes)
      } catch (error) {
        console.error('Error fetching shipped products:', error);
      } finally{
        this.loading = false;
      }
    },

    async fetchBeefRecipes() {
      try {
        const app_id = "c0f59f00";
        const app_key = "a733c1babf786123172c50cd769f573a";
        const response = await axios.get(`https://api.edamam.com/search?q="beef"&app_id=${app_id}&app_key=${app_key}`);
        
        this.beefrecipes = response.data.hits;
      } catch (error) {
        console.error('Error fetching shipped products:', error);
      } finally{
        this.loading = false;
      }
    },
    openModal(recipe) {
      this.selectedRecipe = recipe;
      this.modalVisible = true;
    },

    closeModal() {
      this.modalVisible = false;
      this.selectedRecipe = null;
    },
    
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;



</style>
