<template>
  <li class="fl w-100 w-50-m w-33-l mb4 flex items-center"
    v-bind:title="type">
    <div class="w3 h3 flex items-center justify-center ba b--light-gray">
      <icon v-bind:type="type" v-bind:class="['f4', color]"></icon>
    </div>
    <div class="flex-auto lh-copy pl2 pv1 overflow-hidden">
      <b class="db truncate dark-gray f6">{{ name }}</b>
      <code class="f6 truncate light-silver">{{ type }}</code>
    </div>
  </li>
</template>

<script>
import Icon from './Icon';

export default {
  name: 'icon-card',
  components: {
    Icon,
  },
  props: {
    type: String,
    name: String,
    color: String,
  },
};
</script>
