<template>
  <div class="container">
    <h1 class="a-center">Coins list👎🏿</h1>
    <routing-button :to="'Home'" class="a-center"> Home </routing-button>
    <hr />
    <div>
      <span v-for="(coin, idx) in coins" :key="idx" class="autocomplete-item">{{
        coin
      }}</span>
    </div>
  </div>
</template>

<script setup>
import RoutingButton from './../components/RoutingButton.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const coins = computed(() => {
  return store.getters.allCoins
})
</script>
