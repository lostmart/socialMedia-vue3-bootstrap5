<template>
  <div class="card shadow rounded">
    <img v-if="imgUrl" :src="imgUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <p v-if="cardParragrapho" class="card-text">
        {{ cardParragrapho }}
      </p>
      <slot></slot>
      <div class="d-grid gap-2">
        <button
          v-for="btn in btns"
          :key="btn.texto"
          class="btn"
          :class="btn.class"
        >
          {{ btn.text }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CardComp",
    props: {
      imgUrl: String,
      title: String,
      cardParragrapho: String,
      btns: Array
    }

  }
</script>

<style scoped>
.card {
  border: none;
}
</style>