<template>
  <app-page back title="Помощь">
    <question-item
      v-for="question in questions"
      :key="question.title"
      :question="question"
    ></question-item>
  </app-page>
</template>

<script>
import AppPage from "@/components/ui/AppPage.vue";
import QuestionItem from "@/components/question/QuestionItem.vue";

export default {
  setup() {
    const questions = [
      {title: 'Что есть?', text: 'Тут есть все'},
      {title: 'Авторизация?', text: 'Тоже есть'}
    ]

    return {questions}
  },
  components: {AppPage, QuestionItem}
}
</script>

<style lang="scss" scoped>

</style>