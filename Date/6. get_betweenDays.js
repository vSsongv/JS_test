// 6. 두 날짜 사이의 일수 구하기

function diffDays(date1, date2) {
    const SEC = 1000;
    const MIN = 60;
    const HOUR = 60;
    const DAY = 24;

    const diffSecs = date2.getTime() - date1.getTime();
    const diffDays = diffSecs / SEC / MIN / HOUR / DAY;

    return diffDays;
}

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // => 364