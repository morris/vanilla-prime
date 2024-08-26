import { qsa } from './vendor/exdom.js';

const COLORS = ['#FFF', '#FFDC00', '#39CCCC', '#F012BE', '#01FF70', '#7FDBFF'];
const BACKGROUNDS = ['#000', '#FF4136', '#0074D9', '#85144B', '#001F3F'];

export function getDesign(index: number) {
  const color = COLORS[index % COLORS.length];
  const background = BACKGROUNDS[index % BACKGROUNDS.length];

  return { color, background };
}

export function SplashScreen(el: HTMLElement) {
  let index = 0;
  let timeout = setTimeout(setNextDesign, 2500);

  function setNextDesign() {
    index = index + 1;
    update();

    clearTimeout(timeout);
    timeout = setTimeout(setNextDesign, 5000);
  }

  function update() {
    const { color, background } = getDesign(index);

    el.style.color = color;
    el.style.background = background;
  }

  el.addEventListener('click', setNextDesign);

  update();
}

if (typeof document !== 'undefined') {
  qsa(document, '.splash-screen').forEach(SplashScreen);
}
