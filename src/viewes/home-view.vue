<template>
  <div class="container">
    <div class="top-bar">
      <router-link :to="'/coins-list'"> Coins List </router-link>
    </div>
    <add-ticker @push-name="addTickerByName" />
    <tickers-list :collection="tickers" @delete="deleteTicker" />
  </div>
</template>

<script setup>
import AddTicker from '../components/elements/add-ticker/add-ticker.vue'
import TickersList from '../components/elements/tickers-list/tickers-list.vue'
import { useTickersList } from '../use/tickers-list.js'

const { addTickerByName, deleteTicker, tickers } = useTickersList()
</script>

<style scoped>
.top-bar {
  display: table;
  justify-content: center;
}
</style>
