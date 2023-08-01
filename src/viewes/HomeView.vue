<template>
  <div class="container">
    <div class="top-bar">
      <routing-button :to="'CoinList'"> Coins List </routing-button>
    </div>
    <add-ticker @add-ticker="handleAdd" />
  </div>
</template>

<script setup>
import RoutingButton from './../components/RoutingButton.vue'
import AddTicker from './../components/AddTicker/AddTicker.vue'

const handleAdd = (name) => {
  console.log(name)
}
</script>

<style scoped>
.top-bar {
  display: table;
  justify-content: center;
}
</style>
