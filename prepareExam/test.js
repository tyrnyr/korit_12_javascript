const userIdInput = document.getElementById('user-id-input');
const userPwInput = document.getElementById('user-pw-input');
const joinIdInput = document.getElementById('join-id-input');
const joinPwInput = document.getElementById('join-pw-input');
const loginBtn = document.getElementById('login-btn');
const joinBtn = document.getElementById('join-btn');
const checkIdBtn = document.getElementById('check-id-btn');
const completBtn = document.getElementById('complete-btn');

// localStorage data 갱신
let userTable = JSON.parse(localStorage.getItem('userTable')) || [];

//테스트용/data
const addUserTable = [{
    id: 'adcde',
    pw: '12345t',
    completed: false,
},
{
    id: 'adccc',
    pw: '145t',
    completed: false,
},
{
    id: 'cdef',
    pw: '12dw',
    completed: false,
},];

userTable.push(...addUserTable);
localStorage.setItem('userTable', JSON.stringify(userTable));

// login 키
loginBtn.addEventListener('click', () => {
    const user = userTable.find(user => user.id === userIdInput && user.pw === userPwInput);

    if(user) {
        alert('로그인 성공!');

    } else {
        alert('아이디 또는 패스워드를 잘못입력하였습니다.');
    }
})