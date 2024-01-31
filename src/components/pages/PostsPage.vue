
<template>
  <div id="app" class="p-8 mt-8">
    <h1 class="text-2xl font-bold mb-4">{{ $t('chickenRecipes') }}</h1>
    <div v-if="loadingChiken" class="text-center mt-4">
      <button type="button" class="" disabled>
        <svg class="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
        {{ $t('loading') }}
      </button>
    </div>

    <div class="flex flex-wrap -mx-4">
      <recipe-card v-for="(recipe, index) in chickenRecipes" :key="index" :recipe="recipe" @click="openModal(recipe)" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-4"></recipe-card>
    </div>
  </div>

  <div id="app" class="p-8 mt-8">
    <h1 class="text-2xl font-bold mb-4">{{ $t('beefRecipes') }}</h1>
    <div v-if="loadingBeef" class="text-center mt-4">
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

import eventBus from "../../eventBus"
import { fetchPosts } from "../../API/service";

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
      loadingChiken: true,
      loadingBeef: true,
    };
  },
  
  async created() {
  eventBus.on('languageChanged', (newLocale) => {
    this.$i18n.locale = newLocale;
  });

  try {
    console.log("recipes length is: ", this.chickenRecipes.length);

    if (this.chickenRecipes.length === 0) {
      fetchPosts("chicken")
        .then(data => {
          this.chickenRecipes = data.hits;
          this.loadingChiken = false;
        })
        .catch(error => {
          console.error("Error fetching chicken recipes:", error);
        });
    }

    if (this.beefrecipes.length === 0) {
      fetchPosts("beef")
        .then(data => {
          this.beefrecipes = data.hits;
          this.loadingBeef = false;
        })
        .catch(error => {
          console.error("Error fetching beef recipes:", error);
        });
    }
  } catch (error) {
    console.error("Error in created hook:", error);
  }
},

  methods: {
    
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
