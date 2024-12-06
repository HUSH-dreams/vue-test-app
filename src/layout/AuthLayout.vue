<template>
  <div class="container with-nav">
    <app-message v-if="message"></app-message>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMessage from "@/components/ui/AppMessage.vue";
import {useStore} from "vuex";
import {computed} from "vue";

export default {
  components: {
    AppMessage,
  },
  setup() {
    const store = useStore()

    const message = computed(() => store.state.message)

    return {message}
  }
}
</script>

<style lang="scss" scoped>

</style>