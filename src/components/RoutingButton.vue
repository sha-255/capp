<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'

const props = defineProps({
  to: {
    type: String,
    required: true
  }
})

const router = useRouter()

const handleClick = () => {
  router.push({ name: props.to })
}
</script>
