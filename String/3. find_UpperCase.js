// 3. 대문자 찾기

function countUpperCase(str) {
    return str.match(/[A-Z]/g).length;
}
console.log(countUpperCase('KoreaTimeGood')); // => 3