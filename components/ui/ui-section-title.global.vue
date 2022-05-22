<template>
  <h2 v-if="!reversed" class="section-title">
    <slot />
    <span class="section-title__stroked-text">
      <slot name="stroked-text" />
    </span>
  </h2>
  <h2 v-else class="section-title">
    <span class="section-title__stroked-text">
      <slot />
    </span>
    <slot name="normal-text" />
  </h2>
</template>

<script>
export default {
  name: "SectionTitle",
  props: {
    reversed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped lang="scss">
.section-title {
  font-family: 'Geometria', sans-serif;
  font-style: normal;
  font-size: 96px;
  font-weight: 700;
  line-height: 110%;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  &__stroked-text {
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #ffffff;
  }
  &.small {
    font-size: 56px;
    @media screen and (max-width: 1200px) {
      font-size: 52px;
    }
    @media screen and (max-width: 992px) {
      max-width: 100%;
      font-size: 48px;
    }
    @media screen and (max-width: 767px) {
      font-size: 44px;
    }
    @media screen and (max-width: 575px) {
      font-size: 42px;
    }
    @media screen and (max-width: 375px) {
      font-size: 40px;
    }
  }
}
</style>
