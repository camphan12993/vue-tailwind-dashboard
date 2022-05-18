<template>
  <div class="flex h-screen bg-gray-50 dark:bg-gray-900">
    <SideBar />
    <div class="flex flex-col flex-1 w-full">
      <NavBar />
      <main class="h-full overflow-y-auto"></main>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavBar from './NavBar.vue';
import SideBar from './SideBar.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    NavBar,
    SideBar,
  },
});
</script>
