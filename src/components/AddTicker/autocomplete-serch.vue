<template>
  <div class="align-center">
    <span
      v-for="(coin, idx) in autocompleteCoins"
      :key="idx"
      @click="$emit('push-name', coin)"
      class="autocomplete-item"
      >{{ coin }}</span
    >
  </div>
</template>

<script setup>
import { autocomplete } from '../../use/autocomplete.js'
import { useCoinsStore } from '../../stores/coins-store.js'

const props = defineProps({
  modelValue: 'String'
})
defineEmits(['push-name'])

const store = useCoinsStore()
const coins = computed(() => {
  return store
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
