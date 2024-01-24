<template>
  <div id="app" class="p-8">
    <h1 class="text-3xl font-bold mb-4">{{ $t('search') }}</h1>
    
    <div class="mb-4">
      <input v-model="query" @input="searchRecipes" type="text" class="p-2 border rounded-md" pplaceholder="$t('placeholder')">
    </div>

    <div v-if="loading" class="text-center">
      {{ $t('loading') }}
    </div>

    <div class="flex flex-wrap -mx-4">
        <recipe-card v-for="(recipe, index) in recipes" :key="index" :recipe="recipe" @click="openModal(recipe)"></recipe-card>
      </div>

    <div v-if="error" class="text-red-500">
      {{ error }}
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
      query: '',
      recipes: [],
      loading: false,
      error: null,

      selectedRecipe: null,
      modalVisible: false,
    };
  },
  created() {
    eventBus.on('languageChanged', (newLocale) => {
      this.$i18n.locale = newLocale;
    });
  },
  methods: {
    async searchRecipes() {
      this.loading = true;
      this.error = null;

      try {
        const app_id = 'c0f59f00'; 
        const app_key = 'a733c1babf786123172c50cd769f573a'; 

        const response = await axios.get(`https://api.edamam.com/search?q=${this.query}&app_id=${app_id}&app_key=${app_key}`);
        

        this.recipes = response.data.hits;
      } catch (error) {
        console.error('Error fetching recipes:', error);
        this.error = 'Error fetching recipes. Please try again.';
      } finally {
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
#app {
  
}
</style>
