<template>
  <aside :class="[isSidebarOpen ? 'w-64' : 'w-16']"
    class="z-30 flex-shrink-0 hidden overflow-y-auto border-r bg-white dark:bg-gray-800 lg:block transition-[width] ease-out duration-200">
    <div class="pb-4 text-gray-500 dark:text-gray-400">
      <div class="h-16 flex items-center border-b whitespace-nowrap overflow-hidden">
        <div :class="[isSidebarOpen ? 'ml-6' : 'ml-3']" class="w-10 h-10 flex-shrink-0 rounded-full bg-purple-500">
        </div>
        <a :class="[isSidebarOpen ? 'opacity-100' : 'opacity-0']"
          class="ml-2 text-lg font-bold text-gray-800 dark:text-gray-200" href="#"> My Labs </a>
      </div>
      <ul class="mt-6">
        <li class="relative px-6 py-3" v-for="(item, index) in routes" :key="index">
          <router-link custom :to="item.path" v-slot="{ href, navigate, isActive }">
            <span v-if="isActive" class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"></span>
            <a :href="href" @click="navigate"
              class="inline-flex items-center w-full text-sm font-semibold text-gray-500 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100">
              <i :class='"bx bxs-" + item.icon'></i>
              <span :class="[isSidebarOpen ? 'opacity-100' : 'opacity-0']" class="ml-4">{{ item.name }}</span>
            </a>
          </router-link>
        </li>
      </ul>
      <div class="px-6 my-6" :class="[isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none']">
        <button
          class="flex items-center justify-between w-full whitespace-nowrap transition-opacity duration-200 px-4 py-2 text-sm font-medium leading-5 text-white bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
          Create account
          <span class="ml-2" aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import sideBarRoutes from '@/models/SideBarRoutes';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'SideBar',
  setup() {
    const routes = { ...sideBarRoutes };
    const store = useStore()
    return { routes, isSidebarOpen: computed(() => store.state.isSidebarOpen) };
  },
});
</script>
