// 2. 문자 찾기

function count(str, target) {
    const regExp = new RegExp(target, 'g');
    return str.match(regExp).length;
}

console.log(count('COMPUTERPROGRAMMING', 'R')); // 3