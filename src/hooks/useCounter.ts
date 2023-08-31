import type { Ref } from 'vue';
const useCounter = () => {
  const count: Ref<number> = ref(0);

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    count,
    increment,
    decrement
  };
};

export default useCounter;
