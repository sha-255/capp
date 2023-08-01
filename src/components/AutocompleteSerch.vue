<template>
  <div class="align-center">
    <span
      v-for="(coin, idx) in autocompleteCoins"
      :key="idx"
      @click="addTicker(coin)"
      class="autocomplete-item"
      >{{ coin }}</span
    >
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { useStore } from 'vuex'
import autocomplete from '../use/autocomplete.js'

const props = defineProps({
  modelValue: 'String'
})

const store = useStore()
const coins = computed(() => {
  return store.getters.allCoins
})

const autocompleteCoins = ref([])
watch(
  () => props.modelValue,
  (newValue) => {
    autocompleteCoins.value = autocomplete(newValue, coins.value)
  }
)
</script>

<style scoped>
.align-center {
  width: 100%;
  background-color: #1a1a1a;
  border-radius: 8px;
}
</style>
