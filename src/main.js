import Vue from 'vue';
import App from './App';

const files = require.context('!svg-sprite!./assets', false, /.*\.svg$/);
files.keys().forEach(files);

require('tachyons');

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
});
