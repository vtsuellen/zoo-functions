const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  it('Não passando argumentos. Deverá retornar o objeto', () => {
    const obj = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(obj);
  });
  it('Para os argumentos Monday e 09:00-AM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  it('Para os argumentos Tuesday e 09:00-AM deve retornar a string The zoo is open', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  it('Para os argumentos Wednesday e 09:00-PM deve retornar a string The zoo is closed', () => {
    expect(getOpeningHours('Wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  it('Valor diferente de AM ou PM', () => {
    expect(() => getOpeningHours('Tuesday', '09:00-AN')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  it('Valor maior do que 59 minutos', () => {
    expect(() => getOpeningHours('Monday', '09:60-PM')).toThrow('The minutes must be between 0 and 59');
  });
  it('Quando tem algo diferente de um numero', () => {
    expect(() => getOpeningHours('Friday', 'b6:00-AM')).toThrow(
      'The hour should represent a number',
    );
  });
  it('Hora diferente de 0 a 12', () => {
    expect(() => getOpeningHours('Wednesday', '13:00-PM')).toThrow('The hour must be between 0 and 12');
  });
  it('Se recebe algo diferente dos dias', () => {
    expect(() => getOpeningHours('Suellen', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
});
