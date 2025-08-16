<!-- Vite Dynamic Imports -->

<template>
  <div class="gallery">
    <img 
      v-for="(image, index) in images" 
      :key="index"
      :src="image"
      :alt="`Image ${index}`"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const images = ref([])

onMounted(async () => {
  // Add error handling
  try {
    const imageModules = import.meta.glob(`../assets/Pictures/2006-05Ruby/Dan's Pix/*.(png|jpg|jpeg|gif|svg)`, {
      eager: false // lazy loading for better performance
    });
    
    for (const path in imageModules) {
      const mod = await imageModules[path]();
      images.value.push(mod.default);
    }
  } catch (error) {
    console.error('Error loading images:', error);
  }
})
</script>

<style type="scss">
.gallery {
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: baseline;
  gap: 3rem;

  img {
    justify-content: space-evenly;
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
}
</style>