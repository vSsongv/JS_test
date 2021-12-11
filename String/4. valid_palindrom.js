// 4. 유효한 팰린드롬

function isPalindrome(s) {
    const str = s.toUpperCase().replace(/[^A-Z0-9]/g, '');
    return str === str.split('').reverse().join(''); // true?false왜 안됨?
}

console.log(isPalindrome('A man, a plan, a canal: Panama')); // => true
console.log(isPalindrome('race a car')); // => false