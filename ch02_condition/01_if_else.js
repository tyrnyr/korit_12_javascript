let age = 12;
let busFare = 0;

if(age < 7) {
  busFare = 0;
} else if (age>=7 && age < 13) {
  busFare = 420;
} else if (age>=13 && age <19) {
  busFare = 720;
} else if (age >= 19 && age <=70) {
  busFare=1200;
} else if (age>70) {
  busFare=0;
}

console.log(busFare + " 원");

// bmi 지수 계산 관련한 부분을 JavaScript로 작성하시오.
let height = 172;
let weight = 68;
let bmi = 0;
let grade = '';

// 로직 작성하시오

height *= 0.01;
bmi = weight / height**2;
bmi = bmi.toFixed(2); // 소수점 둘째 자리까지만 표기하기 위해 number 자료형의 .toFixed() 메서드 호출

if ( bmi < 18.5 ) {
    grade = '저체중';
} else if ( bmi < 23 ) {
    grade = '정상';
} else if ( bmi < 25 ) {
    grade = '비만 전 단계';
} else if ( bmi < 30 ) {
    grade = '1 단계 비만';
} else if ( bmi < 35 ) {
    grade = '2 단계 비만';
} else {
    grade = '3 단계 비만';
}

console.log('당신의 bmi 지수는 ' + bmi +'이고 ' + grade + ' 입니다.');

