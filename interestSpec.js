const { calculateSimpleInterest } = require('../src/script');
describe('Interest Rate Calculator', () => {
  it('calculates simple interest', () => {
    expect(calculateSimpleInterest('1000', '5', '2').interest).toBe(100);
  });
  it('calculates the total amount after interest', () => {
    expect(calculateSimpleInterest('1000', '5', '2').totalAmount).toBe(1100);
  });
});
