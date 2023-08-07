<template>
  <div class="container1">
    <div>
      <p class="name">{{ props.ticker.value.name }}</p>
      <p class="price">{{ props.ticker.value.price }} USD</p>
    </div>
    <div class="trash-btn" @click="emit('delete', props.ticker)">
      <trash-svg />
      <p>Delete</p>
    </div>
  </div>
</template>

<script setup>
import TrashSvg from '../SVGs/trash-svg.vue'

const props = defineProps({
  ticker: {
    type: Object,
    required: true,
    validator(value) {
      return value.value.name && value.value.price
    }
  }
})
const emit = defineEmits(['delete'])
</script>

<style scoped>
.container1 {
  overflow: hidden;
  cursor: pointer;
  text-align: center;
  background-color: #1a1a1a;
  border-radius: 8px;
  width: 30.7312%;
  height: 150px;
  margin: 10px;
}

.name {
  color: darkgray;
  font-weight: 700;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  height: 65%;
}

.price {
  color: white;
  font-weight: 700;
  flex-direction: column;
  display: flex;
  justify-content: space-evenly;
  height: 65%;
}

.trash-btn {
  font-weight: 700;
  background-color: #646cff;
  display: flex;
  justify-content: center;
  height: 35%;
}

.trash-btn text {
  text-align: center;
}

.trash-btn:hover {
  color: darkgray;
  background-color: #535bf2;
}

.trash-btn:hover svg {
  fill: darkgrey;
}

p {
  align-self: center;
}
</style>
