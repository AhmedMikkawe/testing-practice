const reverseString = require("../code/reverseString");
test("reverse one word",()=>{
    expect(reverseString("hello")).toBe("olleh");
});
test("reverse multiple words",()=>{
    expect(reverseString("hello world")).toBe("dlrow olleh");
});