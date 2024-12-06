<template>
  <h5 v-if="requests.length === 0" class="text-center">Заявок пока нет</h5>
  <table v-else class="table">
    <thead>
    <tr>
      <th>#</th>
      <th>ФИО</th>
      <th>Телефон</th>
      <th>Сумма</th>
      <th>Статус</th>
      <th>Действие</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="(r, i) in requests" :key="r.id">
      <td>{{ i + 1 }}</td>
      <td>{{ r.initials }}</td>
      <td>{{ r.phone }}</td>
      <td>{{ currency(r.amount) }}</td>
      <td><app-status :type="r.status"/></td>
      <td>
        <router-link v-slot="{navigate}" custom :to="{name: 'Request', params: {id: r.id}}">
          <button class="btn" @click="navigate">Открыть</button>
        </router-link>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<script>
import {currency} from "@/utils/currency.js";
import AppStatus from "@/components/ui/AppStatus.vue";

export default {
  props: ['requests'],
  setup() {
    return {currency}
  },
  components: {
    AppStatus
  }
}
</script>

<style lang="scss" scoped>

</style>