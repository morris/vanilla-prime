import { expect, test } from '@playwright/test';
import { getDesign } from '../../src/js/main.js';

test('getDesign works', () => {
  expect(getDesign(0)).toEqual({ color: '#FFF', background: '#000' });
  expect(getDesign(1)).toEqual({ color: '#FFDC00', background: '#FF4136' });
});
