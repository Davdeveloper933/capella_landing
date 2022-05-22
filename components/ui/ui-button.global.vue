<template>
  <button class="ui-button" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "UiButton",
};
</script>

<style lang="scss" scoped>
.ui-button {
  background: linear-gradient(90deg, #ff7d9c -30.17%, #1460ff 74.79%);
  border-radius: 40px;
  padding: 14px 82px;
  font-weight: 500;
  font-size: 16px;
  display: inline-block;
  text-align: center;
  letter-spacing: -0.01em;
  color: #ffffff;
  transition: .3s;
  &:hover {
    filter: brightness(85%);
  }
}
</style>
