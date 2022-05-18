<template>
  <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block shadow-lg">
    <div className="py-4 text-gray-500 dark:text-gray-400">
      <a className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#"> Windmill </a>
      <ul className="mt-6">
        <li className="relative px-6 py-3" v-for="(item, index) in routes" :key="index">
          <router-link custom :to="item.path" v-slot="{ href, navigate, isActive }">
            <span
              v-if="isActive"
              class="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
              aria-hidden="true"
            ></span>
            <a
              :href="href"
              @click="navigate"
              class="inline-flex items-center w-full text-sm font-semibold text-gray-800 transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200 dark:text-gray-100"
            >
              <SVGIcon name="item.name" />
              <span class="ml-4">{{ item.name }}</span>
            </a>
          </router-link>
        </li>
      </ul>
      <div className="px-6 my-6">
        <button
          class="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
        >
          Create account
          <span class="ml-2" aria-hidden="true">+</span>
        </button>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import sideBarRoutes from '@/models/SideBarRoutes';
import SVGIcon from '@/components/SVGIcon.vue';

export default defineComponent({
  name: 'SideBar',
  components: { SVGIcon },
  setup() {
    const routes = { ...sideBarRoutes };
    return { routes };
  },
});
</script>
