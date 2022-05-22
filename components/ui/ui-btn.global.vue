<template>
  <button class="ui-btn">
    <slot />
  </button>
</template>

<script>
export default {
  name: "UiBtn",
};
</script>

<style lang="scss" scoped>
.ui-btn {
  border-radius: 50%;
  background: rgba(164, 194, 245, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.08);
  min-width: 40px;
  min-height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: .3s;
  -webkit-transition: .3s;
  -moz-transition: .3s;
}
</style>
