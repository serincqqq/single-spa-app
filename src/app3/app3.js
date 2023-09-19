import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import Main from './main.vue'

domElementGetter()
const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#app3',
    render: r => r(Main)
  },
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];
function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('app3');
  if (!el) {
    el = document.createElement('div');
    el.id = 'app3';
    document.body.appendChild(el);
  }

  return el;
}