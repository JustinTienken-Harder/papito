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
import { ref, onMounted } from "vue";

const props = defineProps(["photosUrl"]);
const strgUrl = `../assets/Pictures${props.photosUrl}*.(png|jpg|jpeg|gif|svg)`;

const images = ref([]);

onMounted(async () => {
  // Add error handling

  switch (props.photosUrl) {
    case "CameraPictures/2002/October/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2002/October/*.(png|jpg|jpeg|gif|svg)",
          {
            eager: false, // lazy loading for better performance
          },
        );

        for (const path in imageModules) {
          const mod = await imageModules[path]();
          images.value.push(mod.default);
        }
      } catch (error) {
        console.error("Error loading images:", error);
      }
      break;
    default:
      console.warn("Unknown photosUrl:", props.photosUrl);
  }
});
</script>

<style type="scss">
.gallery {
  margin: 10rem;
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap to the next line */
  gap: 1.5rem; /* Optional: adds space between items */

  img {
    object-fit: cover;
    object-position: left;
    overflow: hidden;
    flex: 4 1 15rem;
    max-width: 50rem;
    background-color: lightgray;
    display: flex; /* To center content within the item */
    justify-content: center;
    align-items: center;
    font-size: 1.5em;
    box-shadow: 0 1px 4px black;
  }

  img:hover {
    object-position: right;
    transition: object-position 12s ease;
    cursor: pointer;
  }
}

@media (max-width: 430px) {
  .gallery {
    margin: 40% 5% 0 5%;
    gap: 2rem;

    img {
      flex: 1 1 100%;
      max-width: none;
    }
  }
}
</style>
