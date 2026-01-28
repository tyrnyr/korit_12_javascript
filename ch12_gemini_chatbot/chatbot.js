const chatHistory = document.getElementById('chat-history');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const loadingIndicator = document.getElementById('loading');
const apiKeyModal = document.getElementById('api-key-modal');
const apiKeyInput = document.getElementById('api-key-input');
const saveKeyBtn = document.getElementById('save-key-btn');

let GOOGLE_API_KEY=''; // 시작하기 누르고 변수에 대입

// 1. api key 저장 기능 명시
saveKeyBtn.addEventListener('click', () => {
  const key = apiKeyInput.value.trim(); // 앞 뒤 공백 날린 value값 -> 지역변수에 대입
  if(key){
    GOOGLE_API_KEY = key;
    apiKeyModal.style.display = 'none'; // 모달 닫힘 
  } else {
    alert('API key를 입력해주세요')
  }
});

// 2. message 전송 기능
async function sendMessage () {
  const message = userInput.value.trim();

  // 빈 메시지 방지
  if (message === '') return;

  // 1. 화면에 사용자 메시지 표시
  appendMessage('user', message); 
  userInput.value = ''; // 보내고나면 입력창 초기화 

  // 2. 로딩 애니메이션 켜기
  showLoading(true);

  // 예외처리 구문 (JS) : api key 오류 방지
  try {
    // 3. Gemini API 호출(fetch API 사용)
    const clearKey = GOOGLE_API_KEY.trim();
    const response = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${clearKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify( {
        contents: [{
          parts:[{text : message}]
        }]
      })
    });

    const data = await response.json();

    // 4) 응답 데이터 확인 
    if(data.candidates && data.candidates[0].content){
      const botResponse = data.candidates[0].content.parts[0].text;
      appendMessage('bot', botResponse);
    } else {
      appendMessage('bot', '죄송합니다. 오류가 발생했습니다. API key를 확인해주세요');
      console.log('Error : ', data);
    }
  } catch(error) {
      console.log('Fetch Error : ', error);
      appendMessage('bot', '네트워크 오류가 발생했습니다.');
  } finally {
    // 5) loading off {
    showLoading(false);
  }
}

// 3. 화면에 메시지 추가하는 함수 (UI 업데이트) 
function appendMessage(sender, text) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add('message');
  messageDiv.classList.add(sender == 'user'? 'user-message' : 'bot-message'); 

  let formattedText = text.replace(/\n/g, '<br>');
  messageDiv.innerHTML = formattedText; 

  chatHistory.appendChild(messageDiv);

  // 스크롤 항상 맨 위로
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

// 4. 로딩 상태 제어 관련 함수
function showLoading(isLoading) {
  if(isLoading) {
    loadingIndicator.style.display = 'block';
    chatHistory.scrollTop = chatHistory.scrollHeight; // 로딩 표시가 보이게 스크롤 맞춰줌
  } else {
    loadingIndicator.style.display = 'none';
  }
}

// 이벤트 리스너 등록
sendBtn.addEventListener('click', sendMessage);

// 엔터키 입력시 전송
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') sendMessage(); 
});

