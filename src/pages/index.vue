<script setup lang="ts">
import { useBreakpoints } from '@/hooks/useBreakpoints';
import useCounter from '@/hooks/useCounter';

const { width, device } = useBreakpoints();
const { count, increment, decrement } = useCounter();
</script>

<template>
  <div class="home">
    <div>This is Home page</div>
    <div>Size: {{ width }}</div>
    <div>Device: {{ device }}</div>

    <div>Count: {{ count }}</div>

    <div>
      <n-button size="large" type="primary" @click="increment">Increment</n-button>
      <n-button size="large" @click="decrement" style="margin-left: 2rem">Decrement</n-button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>

<route lang="yaml">
name: Home
meta:
  layout: default
</route>
