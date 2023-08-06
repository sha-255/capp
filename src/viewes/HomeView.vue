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
import RoutingButton from '../components/RoutingButton.vue'
import AddTicker from '../components/AddTicker/AddTicker.vue'
import TickersList from '../components/TickersList.vue'
import { useTickersList } from '../use/tickersList'

const { addTickerByName, deleteTicker, tickers } = useTickersList()
</script>

<style scoped>
.top-bar {
  display: table;
  justify-content: center;
}
</style>
