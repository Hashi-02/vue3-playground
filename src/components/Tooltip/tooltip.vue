<template>
  <div class="tooltip" @mouseenter="showTooltip" @mouseleave="hideTooltip">
    <slot></slot>
    <div class="tooltiptext" :class="{ visible: isVisible }">{{ props.text }}</div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
  text: string;
}>();

const isVisible = ref(false);

const showTooltip = () => {
  isVisible.value = true;
};

const hideTooltip = () => {
  isVisible.value = false;
};
</script>

<style scoped>
.tooltip {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

.tooltiptext {
  visibility: hidden;
  opacity: 0;
  width: 120px;
  background-color: black;
  color: white;
  text-align: center;
  border-radius: 6px;
  padding: 5px 10px;
  position: absolute;
  bottom: 125%;
  left: 50%;
  transform: translateX(-50%);
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 1;
}

.tooltiptext.visible {
  visibility: visible;
  opacity: 1;
}
</style>
