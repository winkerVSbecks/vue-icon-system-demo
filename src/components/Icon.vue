<template>
  <svg viewBox="0 0 20 20"
    class="dib v-mid"
    width="1em" height="1em">
    <use v-bind:xlink:href="href"></use>
  </svg>
</template>

<script>
export default {
  name: 'icon',
  props: {
    type: String,
  },
  computed: {
    href() {
      return `#${this.type}`;
    },
  },
};
</script>
