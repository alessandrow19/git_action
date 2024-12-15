// index.test.js
const soma = require('./index');

test('Soma de 3 + 5 deve ser 8', () => {
  expect(soma(3, 5)).toBe(8);
});

test('Soma de 0 + 0 deve ser 0', () => {
  expect(soma(0, 1)).toBe(0);
});
