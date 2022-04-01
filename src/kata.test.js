const { Kata } = require('./kata');

describe('First story', () => {
  test('GIVEN [0, 1, 2, 3, 4, 5, 6] WHEN logic THEN returns 6', () => {
    const kata = new Kata();
    expect(kata.maxdiff([0, 1, 2, 3, 4, 5, 6])).toStrictEqual(6);
  });

  test('GIVEN [0, 1, 2, 3, 4, 5] WHEN logic THEN returns 5', () => {
    const kata = new Kata();
    expect(kata.maxdiff([0, 1, 2, 3, 4, 5])).toStrictEqual(5);
  });
});




