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
