<template>
  <div class="w-full md:w-1/2 lg:w-1/4 p-4">
    <div class="bg-white rounded-lg overflow-hidden shadow-md">
      <img :src="recipe.recipe.image" :alt="recipe.recipe.label" class="w-full h-40 object-cover object-center">
      <div class="p-4">
        <h2 class="text-xl font-semibold mb-2">{{ recipe.recipe.label }}</h2>
        <p class="text-gray-600">{{ recipe.recipe.cuisineType[0] }} cuisine</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recipe'],
};
</script>

<style>
</style>
