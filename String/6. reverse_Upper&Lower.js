// 6. 대소문자 변환

function toggleCase(s) {
    const str = s.split('');
    return str.map(alpha => (alpha.toUpperCase()) === alpha ? alpha.toLowerCase() : alpha.toUpperCase()).join('');
}

console.log(toggleCase('StuDY')); // => 'sTUdy'