const calculator = require("../code/calculator");
test("add",()=>{
    expect(calculator.add(1,2)).toBe(3);
});
test("subtract",()=>{
    expect(calculator.subtract(5,2)).toBe(3);
});
test("divide",()=>{
    expect(calculator.divide(10,2)).toBe(5);
});
test("divide by zero",()=>{
    expect(calculator.divide(10,0)).toBe("can't divide 10 by zero");
});
test("multiply",()=>{
    expect(calculator.multiply(3,2)).toBe(6);
});