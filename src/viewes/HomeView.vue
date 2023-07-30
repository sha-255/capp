<template>
  <div class="container">
    <div class="top-bar">
      <routing-button :to="'CoinList'"> Coins List </routing-button>
    </div>
    <add-ticker v-model="serch" />
    <span>{{ serch }}</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import RoutingButton from './../components/RoutingButton.vue'
import AddTicker from './../components/AddTicker/AddTicker.vue'

const serch = ref('')
</script>

<style scoped>
.top-bar {
  display: table;
  justify-content: center;
}
</style>
