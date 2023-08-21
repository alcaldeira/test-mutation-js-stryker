const Cnh = require('../src/cnh');
const cnh = new Cnh();

test('Verificar se é possível tirar CNH com 18 anos', () => {
  expect(cnh.obterCnh(18, true)).toBe(true)
})

test('Verificar se é possível menor de 18 anos tirar CNH', () => {
  expect(cnh.obterCnh(17, true)).toBe('Não pode tirar CNH')
})
