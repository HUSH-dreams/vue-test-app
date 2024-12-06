<template>
  <component :is="layout + '-layout'" v-if="layout"></component>
  <h2>Еще что-то новое</h2>
</template>

<script>
import {computed} from "vue";
import MainLayout from "@/layout/MainLayout.vue";
import AuthLayout from "@/layout/AuthLayout.vue";
import {useRoute} from 'vue-router'

export default {
  setup() {
    const route = useRoute()

    return {layout: computed(() => route.meta.layout)}
  },
  components: {
    MainLayout,
    AuthLayout,
  }
}
</script>

<style lang="scss" scoped>

</style>