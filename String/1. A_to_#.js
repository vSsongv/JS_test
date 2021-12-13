// 1. A를 #으로

function replaceAtoSharp(str) {
    return str.replace(/A/g, '#');
}

console.log(replaceAtoSharp('BANANA')); // => B#N#N#