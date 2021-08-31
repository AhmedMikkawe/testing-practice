function capitalize(string) {
    let arr = string.split(" ");
    let newArr = [];
    for(let i =0; i < arr.length; i++){
        let word = arr[i];
        newArr.push(word.charAt(0).toUpperCase() + word.substring(1));
    }
    return newArr.join(" ");
}
module.exports = capitalize;