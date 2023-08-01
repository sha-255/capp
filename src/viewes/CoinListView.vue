<template>
  <div class="container">
    <h1 class="h">Coins list👎🏿</h1>
    <routing-button :to="'Home'" class="rb"> Home </routing-button>
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

<style scoped>
.h {
  align-self: center;
}
.rb {
  align-self: center;
}
</style>
