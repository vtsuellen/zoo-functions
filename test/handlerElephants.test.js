const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  it('Quantidade de elefantes', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  it('Popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  it('Nomes de todos os elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  it('Média de idade dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe((10.5));
  });
  it('Localização dos elefantes dentro do Zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  it('Relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual([
      'Friday',
      'Saturday',
      'Sunday',
      'Tuesday',
    ]);
  });
  it('Sem argumentos a função retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
  it('Passando um valor invalido retorna null', () => {
    expect(handlerElephants('suellen')).toBe(null);
  });
  it('Passando um objeto vazio retorna Parâmetro inválido, é necessário uma string', () => {
    expect(handlerElephants({})).toEqual('Parâmetro inválido, é necessário uma string');
  });
});
