<script setup lang="ts">
const props = defineProps<{
  label: string;
}>();
</script>

<template>
  <button
    class="bg-primary rounded-[8px] py-[18px] px-[12px] text-white custom-shadow lg:min-w-[320px]"
  >
    {{ label }}
  </button>
</template>

<style scoped>
.custom-shadow {
  box-shadow: 0 4px 61px rgb(77, 71, 195, 0.4);
}
</style>
