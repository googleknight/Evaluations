const calculateScore = require('./evaluation1');

describe('General direct test cases for scoring ', () => {
  it('input without spare or strike', () => {
    expect(calculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
  });
  it('input with 1 spare no strike', () => {
    expect(calculateScore([3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(94);
  });
});

// describe('Testing checking functions ', () => {
//   it('checking spare, should return false', () => {
//     expect(calculateScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
//   });
//   it('input with 1 spare no strike', () => {
//     expect(calculateScore([3, 6, 3, 7, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(94);
//   });
// });
