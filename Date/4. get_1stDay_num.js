// 4. 1일의 요일을 나타내는 정수(0 ~ 6) 구하기

function getFirstDayOfMonth(year, month) {
    const day = new Date();
    day.setFullYear(year, month, 1)
    return day.getDay();
}

// 2021년 1월 1일은 금요일
console.log(getFirstDayOfMonth(2021, 0)); // => 5

// 2021년 12월 1일은 수요일
console.log(getFirstDayOfMonth(2021, 11)); // => 3