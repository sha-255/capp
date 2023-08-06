<template>
  <section>
    <div class="flex-container">
      <div class="max-w">
        <span class="text-bold">Ticker</span>
        <input
          v-model="model"
          placeholder="For examle DOGE"
          @keydown.enter="addTickerName(model)"
        />
        <autocomplete-serch v-model="model" @push-name="addTickerName" />
        <span v-if="isError" class="error">Ticker can`t be empty</span>
        <add-button
          :class="{ margintop: !isError }"
          @click="addTickerName(model)"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, watch } from 'vue'
import AddButton from './AddButton.vue'
import AutocompleteSerch from '../AutocompleteSerch.vue'

const emit = defineEmits(['push-name'])
const model = ref('')

const isError = ref(false)
const addTickerName = (name) => {
  model.value = ''
  if (name === '') {
    isError.value = true
    return
  }
  emit('push-name', name)
}
watch(model, () => (isError.value = false))
</script>

<style scoped>
@import url('AddTickerStyle.css');
</style>
