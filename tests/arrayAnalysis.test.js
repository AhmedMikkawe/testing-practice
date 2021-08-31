const analyze = require("../code/arrayAnalysis");
test("analyze [1,2,3,4,5,6] test", ()=>{
    expect(analyze([1,2,3,4,5,6])).toHaveProperty("average",3.5);
    expect(analyze([1,2,3,4,5,6])).toHaveProperty("min",1);
    expect(analyze([1,2,3,4,5,6])).toHaveProperty("max",6);
    expect(analyze([1,2,3,4,5,6])).toHaveProperty("length",6);
});

test("analyze [14,2,32,45,51,6] test", ()=>{
    expect(analyze([14,2,32,45,51,6])).toHaveProperty("average",25);
    expect(analyze([14,2,32,45,51,6])).toHaveProperty("min",2);
    expect(analyze([14,2,32,45,51,6])).toHaveProperty("max",51);
    expect(analyze([14,2,32,45,51,6])).toHaveProperty("length",6);
});