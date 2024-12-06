<template>
  <TheNavbar />
  <TheSidebar />
  <div class="container">
    <app-message v-if="message"/>
    <router-view></router-view>
  </div>
</template>

<script>
import TheNavbar from "@/components/TheNavbar.vue";
import AppMessage from "@/components/ui/AppMessage.vue";
import {useStore} from "vuex";
import {computed} from "vue";
import TheSidebar from "@/components/TheSidebar.vue";

export default {
  components: {
    TheNavbar,
    TheSidebar,
    AppMessage
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