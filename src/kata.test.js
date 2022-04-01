const { Kata } = require('./kata');

describe('First story', () => {
  test('GIVEN [0, 1, 2, 3, 4, 5, 6] WHEN logic THEN returns 6', () => {
    const kata = new Kata();
    expect(kata.maxdiff([0, 1, 2, 3, 4, 5, 6])).toStrictEqual(6);
  });

  test('GIVEN [0, 1, 2, 3, 4, 5] WHEN logic THEN returns 5', () => {
    const kata = new Kata();
    expect(kata.maxdiff([0, 1, 5, 3, 4, 2])).toStrictEqual(5);
  });

  test('GIVEN [-0, 1, 2, -3, 4, 5, -6] WHEN logic THEN returns 11', () => {
    const kata = new Kata();
    expect(kata.maxdiff([-0, 1, 2, -3, 4, 5, -6])).toStrictEqual(11);
  });

  test('GIVEN [16] WHEN logic THEN returns 0', () => {
    const kata = new Kata();
    expect(kata.maxdiff([16])).toStrictEqual(0);
  });
});




