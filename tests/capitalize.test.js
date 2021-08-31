const capitalize = require("../code/capitalize");
test("capitalize one word",()=>{
    expect(capitalize("hello")).toBe("Hello");
});
test("capitalize phrase", ()=>{
   expect(capitalize("this is a phrase")).toBe("This Is A Phrase");
});