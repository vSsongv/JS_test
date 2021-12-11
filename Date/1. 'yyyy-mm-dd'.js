// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기

function formatDate(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month > 9 ? String(month) : '0' + String(month);
    let day = date.getDate();
    day = day > 9 ? String(day) : '0' + String(day);
    console.log(`${year}-${month}-${day}`);
}

formatDate(new Date('2021/07/24')); // => "2021-07-24"
formatDate(new Date('1900/1/4')); // => "1900-01-04"