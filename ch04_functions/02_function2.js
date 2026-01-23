/*
let sum00 = sum(10, 5);  // 함수를 변수에 저장하니까 순서를 지키게되어 오류가 발생
console.log(sum00);
*/

// 함수 표현식 정의
let sum = function(a, b) {
  return a+b;
}

// 함수 호출
let sum1= sum(1, 2);
console.log(sum1);
let sum2= sum(3, 4);
console.log(sum2);