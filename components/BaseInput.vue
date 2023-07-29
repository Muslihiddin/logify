<script setup lang="ts">
const props = defineProps<{
  modelValue?: string;
  placeholder: string;
}>();
const emit = defineEmits(["update:modelValue", "blur"]);

function returnVal(e: Event) {
  const target = e.target as HTMLInputElement;
  return target;
}
</script>

<template>
  <input
    :value="modelValue"
    @input="$emit('update:modelValue', returnVal($event).value)"
    @blur="emit('blur')"
    :placeholder="placeholder"
    class="bg-accent outline-none rounded-[8px] px-[26px] py-[20px] placeholder:text-secondary"
  />
</template>
