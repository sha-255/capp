<template>
  <div class="flex-container">
    <span class="text-bold">Ticker</span>
    <input
      placeholder="For examle DOGE"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <div>
      <span v-for="coin in autocomplete()" class="autocomplete">{{
        coin
      }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'

const props = defineProps({
  modelValue: String
})
defineEmits(['update:modelValue'])
const store = useStore()

const coins = computed(() => {
  return store.getters.allCoins
})
const formattedCoins = computed(() => {
  return coins.value.slice(50, 55)
})

watch(
  () => props.modelValue,
  () => autocomplete()
)

const autocomplete = () => {
  if (!props.modelValue) return
  const correct = coins.value.filter((c) =>
    c.toLowerCase().includes(props.modelValue.toLowerCase())
  )
  return correct.filter((cv) => correct.indexOf(cv) <= 3)
}
</script>

<style scoped>
@import url('AddTickerStyle.css');
</style>
