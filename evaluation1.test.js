const calculateScore = require('./evaluation1');

describe('General direct test cases for scoring ', () => {
  it('input without spare or strike', () => {
    expect(calculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
});

