const productInput = document.getElementById('product-input');
const priceInput = document.getElementById('price-input');
const priceInput_Int = Number(priceInput);
const numberInput = document.getElementById('number-input');
const numberInput_Int = Number(numberInput);
const addBtn = document.getElementById('add-btn');
const productList = document.getElementById('product-list');

let shoppings = JSON.parse(localStorage.getItem('shoppings')) || [];

function renderShoppings() {
    productList.innerHTML = ''; 
    shoppings.forEach((shopping, index) => {
        const li = document.createElement('li');
        li.className = 'shopping-item';
        if(shopping.completed) li.classList.add('completed');

        // 체크박스
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = shopping.completed;

        // 제품명
        const span1 = document.createElement('span');
        span1.className = 'product-item';
        span1.textContent = shopping.product;

        // 수량
        const span2 = document.createElement('span');
        span2.className = 'number-item';
        span2.textContent = `${shopping.number}개`;
        
        // 가격
        const span3 = document.createElement('span');
        span3.className = 'price-item';
        span3.textContent = shopping.price ? `${shopping.price}원`:'';

        // 삭제 버튼
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

        li.append(checkbox, span1, span2, span3, deleteBtn);
        productList.appendChild(li);

        // 이벤트 리스너
        checkbox.addEventListener('change', () => {
            shoppings[index].completed = checkbox.checked;
            li.classList.toggle('completed', checkbox.checked);
            // renderShoppings(); // 상태 변경 후 다시 그리기
            saveShoppings();
        });

        deleteBtn.addEventListener('click', () => {
            shoppings.splice(index, 1); // 인덱스로 직접 삭제
            saveShoppings();
            renderShoppings();
        });
    });
}

function saveShoppings() {
    localStorage.setItem('shoppings', JSON.stringify(shoppings));
}

// function addShoppings() {
//     const productText = productInput.value.trim();
//     const priceText = priceInput.value.trim();
//     const numberText = numberInput.value.trim();

//     if(productText === '') {
//       alert('제품명을 입력하세요.');
//       productInput.focus();
//       return;
//     } else if(numberText === '') {
//       alert('수량을 입력하세요.');
//       priceInput.focus();
//       return;
//     }
//     // } else if(priceText === '') {
//     //   alert('가격을 입력하세요.');
//     //   priceInput.focus();
//     //   return;
//     // }

//     const newShoppings = {
//         product: productText,
//         number: numberText,
//         price: priceText,
//         completed: false,
//     };

//     shoppings.push(newShoppings);
//     productInput.value = '';
//     numberInput.value = '';
//     priceInput.value = '';

//     saveShoppings();
//     renderShoppings();
// }

// addBtn.addEventListener('click', addShoppings);
// 함수의 재사용이 없다면
addBtn.addEventListener('click', () => {
    const productText = productInput.value.trim();
    const priceText = priceInput.value.trim();
    const numberText = numberInput.value.trim();

    if(productText === '') {
      alert('제품명을 입력하세요.');
      productInput.focus();
      return;
    } else if(numberText === '') {
      alert('수량을 입력하세요.');
      priceInput.focus();
      return;
    }
    // } else if(priceText === '') {
    //   alert('가격을 입력하세요.');
    //   priceInput.focus();
    //   return;
    // }

    const newShoppings = {
        product: productText,
        number: numberText,
        price: priceText,
        completed: false,
    };

    shoppings.push(newShoppings);
    productInput.value = '';
    numberInput.value = '';
    priceInput.value = '';

    saveShoppings();
    renderShoppings();
});


// 엔터 키 이벤트 (가격 입력창에서도 작동하도록 공통 적용 권장)
[productInput, priceInput].forEach(input => {
    input.addEventListener('keydown', event => {
        if(event.key === 'Enter') addShoppings();
    });
});

window.onload = renderShoppings;
