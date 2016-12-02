<template>
  <main class="ph3 ph5-l pt4 pb5 dark-gray">
    <div class="mv5">
      <h2 class="f5 dark-gray ttu tracked">Icon System</h2>

      <p class="gray measure-wide lh-copy">Each icon has been built on a square canvas which results in a square <code class="bg-near-white f5 pa1">viewBox</code> for example: <code class="bg-near-white f5 pa1">viewBox="0 0 20 20"</code>. The width and height attributes are set to <code class="bg-near-white f5 pa1">1em</code>. The fill colour is set to <code class="bg-near-white f5 pa1">currentColor</code>. Therefore, we can easily size and style the icons using font/dimension and colour CSS classes.</p>

      <p class="gray measure-wide lh-copy"><code class="bg-near-white f5 pa1">&lt;icon type="cloud-with-snow" class="f4 blue"&gt;&lt;/icon&gt;</code></p>
    </div>

    <h3 class="f6 dark-gray ttu tracked">Examples</h3>

    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <icon type="moon-with-craters"></icon> labore et dolore magna aliqua. Ut enim <icon type="thermometer"></icon> ad minim veniam, <icon type="wind"></icon> quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <icon type="orbit"></icon></p>

    <p>
      <a class="f6 link dim br2 ph3 pv2 mb2 mr2 dib white bg-dark-gray" href="#0">
        <icon type="sunrise" class="mr2"></icon>
        Button Text
      </a>
      <a class="f6 link dim br2 ph3 pv2 mb2 mr2 dib white bg-dark-gray" href="#0">
        <icon type="sun" class="mr2"></icon>
        Button Text
      </a>
      <a class="f6 link dim br2 ph3 pv2 mb2 mr2 dib white bg-dark-gray" href="#0">
        <icon type="sunset" class="mr2"></icon>
        Button Text
      </a>
    </p>

    <div class="flex justify-between mv4">
      <icon type="moon-cycle-1" class="db w3 h3 moon-gray"></icon>
      <icon type="moon-cycle-2" class="db w3 h3 light-silver"></icon>
      <icon type="moon-cycle-3" class="db w3 h3 silver"></icon>
      <icon type="moon-cycle-4" class="db w3 h3 gray"></icon>
      <icon type="moon-cycle-5" class="db w3 h3 mid-gray"></icon>
      <icon type="moon-cycle-6" class="db w3 h3 gray"></icon>
      <icon type="moon-cycle-7" class="db w3 h3 silver"></icon>
      <icon type="moon-cycle-8" class="db w3 h3 light-silver"></icon>
    </div>

    <h3 class="f6 dark-gray ttu tracked mt5">
      Icon Set (by <a class="link blue dim"
        href="https://dribbble.com/shots/1925069-Lynny-Icon-Set-Free">
        Matthew Skiles
      </a>)
    </h3>

    <ul class="list pl0 ml0 cf">
      <icon-card v-for="icon in iconTypes"
        v-bind:type="icon.type"
        v-bind:name="icon.name"
        v-bind:color="icon.color">
      </icon-card>
    </ul>

  </main>
</template>

<script>
import Icon from './components/Icon';
import IconCard from './components/IconCard';
import iconTypes from './icon-types';

const colors = ['dark-gray', 'mid-gray', 'gray', 'silver', 'light-silver',
  'moon-gray', 'dark-red', 'red', 'light-red', 'orange', 'gold', 'yellow',
  'purple', 'light-purple', 'dark-pink', 'hot-pink', 'pink', 'light-pink',
  'dark-green', 'green', 'light-green', 'navy', 'dark-blue', 'blue',
  'light-blue', 'lightest-blue', 'washed-red'];
const l = colors.length;

function getRandomColor() {
  return colors[Math.floor(Math.random() * l)];
}

export default {
  name: 'app',
  components: {
    Icon,
    IconCard,
  },
  data() {
    return {
      iconTypes: iconTypes.map(icon => ({
        type: icon.type,
        name: icon.name,
        color: getRandomColor(),
      })),
    };
  },
};
</script>
