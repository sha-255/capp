<template>
  <button v-bind="$attrs" @click="handleClick">
    <slot />
  </button>
</template>

<script setup>
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
