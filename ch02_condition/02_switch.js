let date = new Date();
console.log(date);  // toString() 개념이 따로 없습니다. 객체값이 나옵니다.
let day = date.getDay();
let dayname = '';

console.log(day);
// 일요일이면 0 ~ 토요일이면 6
switch(day) {
  case 0 :
    dayname = '일요일';
    break;
  case 1 :
    dayname = '월요일';
    break;
  case 2 :
    dayname = '화요일';
    break;
  case 3 :
    dayname = '수요일';
    break;
  case 4 :
    dayname = '목요일';
    break;
  case 5 :
    dayname = '금요일';
    break;
  case 6 :
    dayname = '토요일';
    break;
}

console.log('오늘은 ' + dayname + '입니다.');
