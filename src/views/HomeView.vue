<template>
  <div class="home">
    <MainLayout />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MainLayout from '@/layout/MainLayout.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    MainLayout,
  },
});
</script>
