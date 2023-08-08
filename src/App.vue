<template>
  <div>
    <RouterView />
  </div>
</template>

<script setup>
import { useCoinsStore } from './stores/coins-store'

const coinsStore = useCoinsStore()

onMounted(() => coinsStore.getCoins())
</script>
