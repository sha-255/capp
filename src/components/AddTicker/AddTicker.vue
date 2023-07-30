<template>
  <section>
    <div class="flex-container">
      <div class="max-w">
        <span class="text-bold">Ticker</span>
        <input
          placeholder="For examle DOGE"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <div>
          <span v-for="coin in autocompleteCoins" class="autocomplete">{{
            coin
          }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useStore } from 'vuex'
import autocomplete from './../../use/autocomplete.js'

const props = defineProps({
  modelValue: String
})
defineEmits(['update:modelValue'])
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
@import url('AddTickerStyle.css');
</style>
