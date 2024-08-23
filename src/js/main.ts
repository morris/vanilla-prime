import { qsa } from './vendor/exdom.js';

const COLORS = ['#111', '#FFDC00', '#39CCCC', '#F012BE', '#01FF70', '#7FDBFF'];
const BACKGROUNDS = ['#FEFEFE', '#FF4136', '#0074D9', '#85144B', '#001F3F'];

function SplashScreen(el: HTMLElement) {
  let design = 0;
  let timeout = setTimeout(setNextDesign, 2500);

  function setNextDesign() {
    design = design + 1;
    update();

    clearTimeout(timeout);
    timeout = setTimeout(setNextDesign, 5000);
  }

  function update() {
    const color = COLORS[design % COLORS.length];
    const background = BACKGROUNDS[design % BACKGROUNDS.length];

    el.style.color = color;
    el.style.background = background;
  }

  el.addEventListener('click', setNextDesign);

  update();
}

qsa(document, '.splash-screen').forEach(SplashScreen);
