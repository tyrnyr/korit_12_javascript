function getPerson() {
  return {
    fName: '김',
    lName: '영',
    age: 20,
    email: 'kim0@test.com',
    city: '부산광역시',
    contry: '대한민국'
  }
};

// 이상의 코드가 있다고 가정했을 때 email값과 city의 값을 출력하고 싶다면 어떡해야 할까요.
/**
 * 해당 지원자는 부산광역시에 살고 있으며 email은 kim0@test.com입니다.
 */
let person = getPerson();  // 함수 호출 결과가 object니까 걔를 변수에 대입한 다음

console.log(`해당 지원자는 ${person.city}에 살고 있으며 email은 ${person.email}입니다.`);
// 객체명.key값을 통해서 해당 value를 불러냈습니다.

let kimEmail = getPerson().email;
let kimCity = getPerson().city;
console.log(`해당 지원자는 ${kimCity}에 살고 있으며 email은 ${kimEmail}입니다.`);


// 객체의 추출하고자 하는 key와 동일한 변수를 선언합니다. {}내에
let{email, city} = getPerson(); // 이렇게 쓰면 email이라고 하는 변수에 getPerson().email의 value값이, city라고 하는 변수에 getPerson().city의 변수값이 들어갑니다.
console.log(`해당 지원자는 ${city}에 살고 있으며 email은 ${email}입니다.`);

function displayFulName({fName, lName}) {
  console.log(`${lName}${fName}`);
}

displayFulName(getPerson()); // 그러면 argument로는 key로 fName / lName을 가지고 있는 애가 필수적으로 요구됩니다. - 호출시의 argument와 정의 시의 매개변수의 차이점에 주목할 것 -> React에서 허구한 날 쓰이기 때문에 꼭꼭꼭 알아둘것