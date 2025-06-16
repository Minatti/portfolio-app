<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const props = defineProps<{
  images: string[];
}>();
</script>

<template>
  <Swiper
    :navigation="true"
    :pagination="{ clickable: true }"
    :autoplay="{ delay: 10000, disableOnInteraction: false }"
    :loop="true"
    class="w-full h-[400px] rounded-lg overflow-hidden"
  >
    <SwiperSlide
      v-for="(img, index) in images"
      :key="index"
      class="flex items-center justify-center"
    >
      <img
        :src="img"
        alt="Slide"
        class="w-full h-full object-cover"
      />
    </SwiperSlide>
  </Swiper>
</template>
