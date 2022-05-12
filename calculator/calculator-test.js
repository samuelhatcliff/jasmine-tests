const values = {
  amount: 1000,
  years: 5,
  rate: 10
};
const result = calculateMonthlyPayment(values)

describe("calculation tests", function () {
  it('should calculate the monthly rate correctly', function () {
    expect(result).toEqual('21.25');
  });

  it("should return a result with 2 decimal places", function () {
    const index = result.indexOf(".")
    const afterD = result.slice(index)
    expect(afterD.length).toBeLessThan(4);
  });

  it("should return a positive number", function () {
    expect(result[0]).not.toBe("-");
  });

  it("should not return NaN, undefined, or null", function () {
    expect(result).toBeTruthy()
  });

  it("should be a string", function () {
    expect(typeof result).toEqual("string")
  });
});