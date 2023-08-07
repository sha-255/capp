<template>
  <div class="container">
    <div class="top-bar">
      <routing-button :to="'CoinList'"> Coins List </routing-button>
    </div>
    <add-ticker @push-name="addTickerByName" />
    <tickers-list :collection="tickers" @delete="deleteTicker" />
  </div>
</template>

<script setup>
import RoutingButton from '../components/routing/routing-button.vue'
import AddTicker from '../components/addTicker/add-ticker.vue'
import TickersList from '../components/tickersList/tickers-list.vue'
import { useTickersList } from '../use/tickers-list.js'

const { addTickerByName, deleteTicker, tickers } = useTickersList()
</script>

<style scoped>
.top-bar {
  display: table;
  justify-content: center;
}
</style>
