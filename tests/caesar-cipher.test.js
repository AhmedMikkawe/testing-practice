const cipher = require("../code/caesar-cipher");

test("one word",()=>{
    expect(cipher(1,"Hello")).toBe("Ifmmp");
});

test("more words",()=>{
    expect(cipher(4,"Hello My Name Is Ahmed")).toBe("Lipps Qc Reqi Mw Elqih");
});
test("another test",()=>{
    expect(cipher(2,"Zoo is xampp")).toBe("Bqq ku zcorr");
});