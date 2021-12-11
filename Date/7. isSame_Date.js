// 7. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기

function isEqualDate(date1, date2) {
    if (date1.getFullYear() !== date2.getFullYear()) return false;
    if (date1.getMonth() !== date2.getMonth()) return false;
    if (date1.getDate() !== date2.getDate()) return false;
    return true;
}

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // => true
console.log(isEqualDate(new Date('2021/07/24'), new Date('2022/07/2'))); // => false