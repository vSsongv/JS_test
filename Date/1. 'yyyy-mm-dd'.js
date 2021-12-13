// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기

function formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = format(month);
    let day = date.getDate();
    day = format(day);
    return `${year}-${month}-${day}`;
}

const formatDate = (() => {
    const format = n => (n < 10 ? '0' + n : '' + n);
    return date => `${date.getFullYear()}-${format(date.getMonth() + 1)}-${format(date.getDate())}`;
})();

console.log(formatDate(new Date('2021/07/24'))); // => "2021-07-24"
console.log(formatDate(new Date('1900/1/4'))); // => "1900-01-04"