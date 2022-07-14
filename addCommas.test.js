const {addCommas} = require("./addCommas");

describe("#addCommas", () => {
  test("it is a function", () => {
    expect(typeof addCommas).toBe("function");
  });

  test("converts correctly",() =>{
    expect(addCommas(1234)).toEqual("1,234")
  });

  test("correctly converts negative numbers", () =>{
    expect(addCommas(-5678)).toBe("-5,678")
  });
});
