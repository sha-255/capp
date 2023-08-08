<template>
  <div class="container">
    <h1 class="a-center">Coins list👎🏿</h1>
    <router-link class="a-center" :to="'/'">Home</router-link>
    <hr />
    <div>
      <span v-for="(coin, idx) in coins" :key="idx" class="autocomplete-item">{{
        coin
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { useCoinsStore } from '../stores/coins-store'

const store = useCoinsStore()
const coins = computed(() => {
  return store.coinsNames
})
</script>
