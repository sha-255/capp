<template>
  <h1>Coinlist</h1>
  <routing-button :to="'Home'"> Home </routing-button>
  <div>
    <span>{{ coins }}</span>
  </div>
</template>

<script setup>
import RoutingButton from './../components/RoutingButton.vue'
import { computed } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const coins = computed(() => {
  return store.getters.allCoins.join(' | ')
})
</script>
