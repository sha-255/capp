<template>
  <hr v-if="props.collection.length > 0" />
  <div class="flex">
    <coin-ticker
      v-for="(t, idx) in props.collection"
      :key="idx"
      :ticker="t"
      @delete="(t) => emit('delete', t)"
    />
  </div>
</template>

<script setup>
import CoinTicker from './CoinTicker.vue'

const props = defineProps(['collection'])
const emit = defineEmits(['delete'])
</script>

<style scoped>
.flex {
  flex-wrap: wrap;
}
</style>
