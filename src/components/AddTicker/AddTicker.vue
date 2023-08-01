<template>
  <section>
    <div class="flex-container">
      <div class="max-w">
        <span class="text-bold">Ticker</span>
        <input
          v-model="model"
          placeholder="For examle DOGE"
          @keydown.enter="addTicker(model)"
        />
        <autocomplete-serch v-model="model" />
        <span v-if="isError" class="error">Ticker can`t be empty</span>
        <add-button
          :class="{ margintop: !isError }"
          @click="addTicker(model)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import AddButton from './AddButton.vue'
import AutocompleteSerch from '../AutocompleteSerch.vue'

const emit = defineEmits(['add-ticker'])
const model = ref('')

//How do this normal???
const isError = ref(false)
//Why watch not worcked?
const addTicker = (name) => {
  model.value = ''
  if (name === '') {
    isError.value = true
    return
  }
  emit('add-ticker', name)
}
watch(model, () => (isError.value = false))
// watch(
//   () => addTicker,
//   () => (model.value = '')
// )
</script>

<style scoped>
@import url('AddTickerStyle.css');
</style>
