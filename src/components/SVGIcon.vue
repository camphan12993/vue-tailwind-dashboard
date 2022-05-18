<template>
  <component :is="dynamicComponent" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { defineAsyncComponent } from 'vue';

export default defineComponent({
  name: 'SVGIcon',
  props: {
    name: {
      required: true,
      type: String,
    },
  },
  setup(props) {
    const dynamicComponent = () => {
      const name = props.name;

      return defineAsyncComponent(() => import(`@/assets/icons/${name}.svg`));
    };
    return { dynamicComponent };
  },
});
</script>
