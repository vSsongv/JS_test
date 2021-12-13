// 6. 대소문자 변환

// function toggleCase(s) {
//     const str = s.split('');
//     return str.map(alpha => (alpha.toUpperCase()) === alpha ? alpha.toLowerCase() : alpha.toUpperCase()).join('');
// }

const toggleCase = s => s.replace(/([a-z]+)|([A-Z]+)/g, (_, lower, upper) => lower ? lower.toUpperCase() : upper.toLowerCase());

console.log(toggleCase('StuDY')); // => 'sTUdy'