<!-- Vite Dynamic Imports -->

<template>
  <div class="gallery">
    <img
      v-for="(image, index) in images"
      :key="index"
      :src="image"
      :alt="`Image ${index}`"
      @click="openModal(index)"
      class="gallery-img"
    />
  </div>

  <!-- Modal -->
  <div v-if="isModalOpen" class="modal" @click.self="closeModal">
    <button class="modal-close" @click="closeModal">&times;</button>
    <div class="modal-content">
      <img
        :src="images[selectedImageIndex]"
        :alt="`Image ${selectedImageIndex}`"
      />
    </div>
    <button class="modal-prev" @click="prevImage" v-if="images.length > 1">
      ❮
    </button>
    <button class="modal-next" @click="nextImage" v-if="images.length > 1">
      ❯
    </button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(["photosUrl"]);
const strgUrl = `../assets/Pictures${props.photosUrl}*.(png|jpg|jpeg|gif|svg)`;

const images = ref([]);
const isModalOpen = ref(false);
const selectedImageIndex = ref(0);

onMounted(async () => {
  // Add error handling

  switch (props.photosUrl) {
    case "/CameraPictures/2002/October/":
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

    case "/CameraPictures/2002/November/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2002/November/*.(png|jpg|jpeg|gif|svg)",
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

    case "/CameraPictures/2002/December/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2002/December/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/January/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/January/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/February/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/February/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/March/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/March/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/April/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/April/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/May/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/May/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/June/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/June/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/July/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/July/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/August/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/August/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/September/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/September/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/October/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/October/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/November/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/November/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2003/December/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2003/December/*.(png|jpg|jpeg|gif|svg)",
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

      case "/CameraPictures/2004/January/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/January/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/February/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/February/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/March/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/March/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/April/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/April/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/June/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/June/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/July/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/July/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/August/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/August/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/September/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/September/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/October/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/October/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/November/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/November/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2004/December/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2004/December/*.(png|jpg|jpeg|gif|svg)",
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
case "/CameraPictures/2005/January/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/January/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/February/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/February/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/March/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/March/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/April/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/April/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/May/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/May/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/June/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/June/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/July/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/July/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/August/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/August/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/September/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/September/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/October/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/October/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/November/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/November/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2005/December/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2005/December/*.(png|jpg|jpeg|gif|svg)",
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
      case "/CameraPictures/2006/January/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/January/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/February/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/February/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/March/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/March/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/April/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/April/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/May/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/May/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/June/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/June/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/July/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/July/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/August/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/August/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/September/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/September/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/October/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/October/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/November/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/November/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2006/December/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2006/December/*.(png|jpg|jpeg|gif|svg)",
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
      case "/CameraPictures/2007/January/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/January/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/February/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/February/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/March/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/March/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/April/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/April/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/May/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/May/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/June/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/June/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/July/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/July/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/August/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/August/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/September/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/September/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/October/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/October/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/November/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/November/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2007/December/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2007/December/*.(png|jpg|jpeg|gif|svg)",
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
      case "/CameraPictures/2008/January/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/January/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/February/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/February/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/March/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/March/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/April/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/April/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/May/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/May/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/June/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/June/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/July/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/July/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/August/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/August/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/September/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/September/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/October/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/October/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/November/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/November/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2008/December/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2008/December/*.(png|jpg|jpeg|gif|svg)",
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
      case "/CameraPictures/2009/January/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2009/January/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2009/February/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2009/February/*.(png|jpg|jpeg|gif|svg)",
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
    case "/CameraPictures/2009/March/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/CameraPictures/2009/March/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Flottsboro/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Flottsboro/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Vasa/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Vasa/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Gamla Stan/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Gamla Stan/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Stockholm/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Stockholm/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Carl Milles/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Carl Milles/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Skansen/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Skansen/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Marstrand/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Marstrand/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Oslo/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Oslo/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Fjords/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Fjords/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Inlandsbanan/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Inlandsbanan/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Mora/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Mora/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/St Petersburg/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/St Petersburg/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/The Hermitage/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/The Hermitage/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Tallinn Estonia/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Tallinn Estonia/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Segulda/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Segulda/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Riga Latvia/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Riga Latvia/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Augustow Poland/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Augustow Poland/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Ketrzyn Poland/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Ketrzyn Poland/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Wolfsschanze Hitler's Lair/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Wolfsschanze Hitler's Lair/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Gdansk Poland/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Gdansk Poland/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Lublin-Majdanek/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Lublin-Majdanek/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Krakow Poland/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Krakow Poland/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Auschwitz Birkenau/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Auschwitz Birkenau/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Schindler's Factory/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Schindler's Factory/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Krakow Ghetto/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Krakow Ghetto/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Vienna Austria/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Vienna Austria/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Italy Trieste Miramar/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Italy Trieste Miramar/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Italy Mestre Venice/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Italy Mestre Venice/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Carnate Famiglia Taglialegne/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Carnate Famiglia Taglialegne/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Lyon France/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Lyon France/*.(png|jpg|jpeg|gif|svg)",
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
      case "/2006-Europe/Limoges France/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Limoges France/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Oradoure Sur Glane/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Oradoure Sur Glane/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Lourdes/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Lourdes/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Pamplona/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Pamplona/*.(png|jpg|jpeg|gif|svg)",
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
    case "/2006-Europe/Madrid/":
      console.log(props.photosUrl);
      try {
        const imageModules = import.meta.glob(
          "../assets/Pictures/2006-Europe/Madrid/*.(png|jpg|jpeg|gif|svg)",
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
      case "/2006-Europe/Automobiles/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/2006-Europe/Automobiles/*.(png|jpg|jpeg|gif|svg)",
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
      case "/2006-05Ruby/Dan's Pix/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/2006-05Ruby/Dan's Pix/*.(png|jpg|jpeg|gif|svg)",
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
      case "/2006-05Ruby/Gunnar's Photos/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/2006-05Ruby/Gunnar's Photos/*.(png|jpg|jpeg|gif|svg)",
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
      case "/2006-05Ruby/Ruby's Pix/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/2006-05Ruby/Ruby's Pix/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Bejarano/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Bejarano/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Berta/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Berta/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Buga_Amparo/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Buga_Amparo/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Buga_Nena/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Buga_Nena/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Buga_Pacho/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Buga_Pacho/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Cerimonia_Grado_Y_Happy_Birthday_Eliza/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Cerimonia_Grado_Y_Happy_Birthday_Eliza/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Leonor/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Leonor/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Medellin/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Medellin/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Paseo_Holguin/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Paseo_Holguin/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Reunion_de_Grado/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Reunion_de_Grado/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Semana_Santa/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Semana_Santa/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Ruby's_Christmas_2005/Christmas_San_Diego/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Ruby's_Christmas_2005/Christmas_San_Diego/*.(png|jpg|jpeg|gif|svg)",
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
         case "/VidPics/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/VidPics/*.(png|jpg|jpeg|gif|svg)",
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
         case "/pano/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/pano/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Baja_Trips/First_Trip/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Baja_Trips/First_Trip/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Baja_Trips/Second_Trip/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Baja_Trips/Second_Trip/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Baja_Trips/Third_Trip/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Baja_Trips/Third_Trip/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Colombia/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Colombia/*.(png|jpg|jpeg|gif|svg)",
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
         case "/ColombiaViejo/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/ColombiaViejo/*.(png|jpg|jpeg|gif|svg)",
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
         case "/Favorites/":
        console.log(props.photosUrl);
        try {
          const imageModules = import.meta.glob(
            "../assets/Pictures/Favorites/*.(png|jpg|jpeg|gif|svg)",
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

const openModal = (index) => {
  selectedImageIndex.value = index;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const nextImage = () => {
  selectedImageIndex.value =
    (selectedImageIndex.value + 1) % images.value.length;
};

const prevImage = () => {
  selectedImageIndex.value =
    (selectedImageIndex.value - 1 + images.value.length) % images.value.length;
};
</script>

<style type="scss">
.gallery {
  margin: 12rem 10rem 0 10rem;

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
    cursor: pointer;
    transition: transform 0.2s ease;

    &:hover {
      object-position: right;
      transition: object-position 12s ease;
      transform: scale(1.02);
    }
  }
}

/* Modal Styles */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    /* transition: transform 1s ease; */
  }
  /* img:hover {
    transform: scale(1.6);
    transition: transform 1s ease;
  } */
}

.modal-close {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  z-index: 1001;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.2);
  }
}

.modal-prev,
.modal-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.3);
  border: none;
  color: white;
  font-size: 2rem;
  padding: 1rem 1.5rem;
  cursor: pointer;
  z-index: 1001;
  transition: background-color 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.6);
  }
}

.modal-prev {
  left: 2rem;
}

.modal-next {
  right: 2rem;
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

  .modal-close {
    font-size: 2rem;
    top: 1rem;
    right: 1rem;
  }

  .modal-prev,
  .modal-next {
    font-size: 1.5rem;
    padding: 0.75rem 1rem;
  }

  .modal-prev {
    left: 0.5rem;
  }

  .modal-next {
    right: 0.5rem;
  }
}
</style>
