import type { Directive, DirectiveBinding } from 'vue';

interface ElType extends HTMLElement {
  copyData: string | number;
  __handleClick__: any;
}

const copy: Directive = {
  mounted(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
    el.addEventListener('click', handleClick);
  },
  updated(el: ElType, binding: DirectiveBinding) {
    el.copyData = binding.value;
  },
  beforeUnmount(el: ElType) {
    el.removeEventListener('click', el.__handleClick__);
  }
};

function handleClick(this: any) {
  const input = document.createElement('input');
  input.value = this.copyData;
  document.body.appendChild(input);
  input.select();
  document.execCommand('Copy');
  document.body.removeChild(input);
}

export default copy;
