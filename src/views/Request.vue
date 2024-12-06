<template>
  <div>
    <app-loader v-if="loading"></app-loader>
    <app-page back title="Заявка" v-else-if="request">
      <p><strong>ФИО владельца</strong>: {{request.initials}}</p>
      <p><strong>Телефон</strong>: {{request.phone}}</p>
      <p><strong>Сумма</strong>: {{currency(request.amount)}}</p>
      <p><strong>Статус</strong>: <app-status :type="request.status"/></p>

      <div class="form-control">
        <label for="status">Статус</label>
        <select id="status" v-model="status">
          <option value="done">Завершен</option>
          <option value="cancelled">Отменен</option>
          <option value="active">Активен</option>
          <option value="pending">Выполняется</option>
        </select>
      </div>

      <button class="btn" @click="update" v-if="hasChanges">Обновить</button>
      <button class="btn warning" @click="remove">Удалить</button>
    </app-page>
    <h3 v-else>Заявки с ID {{ id }} нет</h3>
  </div>
</template>

<script>
import AppPage from "@/components/ui/AppPage.vue";
import {useRoute, useRouter} from "vue-router";
import {ref, onMounted, computed} from "vue";
import {useStore} from "vuex";
import AppLoader from "@/components/ui/AppLoader.vue";
import AppStatus from "@/components/ui/AppStatus.vue";
import {currency} from "@/utils/currency.js";

export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const loading = ref(true)
    const request = ref({})
    const status = ref()

    onMounted(async () => {
      loading.value = true
      request.value = await store.dispatch('request/loadOne', route.params.id)
      status.value = request.value?.status
      console.log(request.value)
      loading.value = false
    })

    const hasChanges = computed(() => request.value.status !== status.value)

    const update = async () => {
      const data = {...request.value, status: status.value, id: route.params.id}
      await store.dispatch('request/update', data)

      request.value.status = status.value
    }

    const remove = async () => {
      await store.dispatch('request/remove', route.params.id)
      router.push('/')
    }

    return {
      loading,
      request,
      id: route.params.id,
      currency,
      remove,
      update,
      status,
      hasChanges
    }
  },
  components: {
    AppPage,
    AppLoader,
    AppStatus,
  }
}
</script>

<style lang="scss" scoped>

</style>