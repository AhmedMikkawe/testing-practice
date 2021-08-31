function cipher(key, string){
    let newString = '';
    for(let i = 0; i < string.length; i++){
        let char = string[i];
        if(char.match(/[a-z]/i)){
            const code = string.charCodeAt(i);
            if(code >= 65 && code <= 90){
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            }else if(code >= 97 && code <= 122){
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }
        newString += char;
    }
    return newString;
}

module.exports = cipher;