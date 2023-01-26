const wrap = document.querySelector('#wrap');
wrap.style.display = 'flex'
const div = document.createElement('div');
div.className = 'new_element'
div.style.display = 'none';
div.style.width = '30px';
div.style.height = '20px';
div.style.marginLeft = '20px';
div.innerText = 'div';
wrap.append(div);

const textInput = document.querySelector('#text');
textInput.addEventListener('blur', blurBlock);
textInput.addEventListener('focus', focusBlock);

function focusBlock (){
    div.style.display = 'block';
}

function blurBlock(){
    div.style.display = 'none';
}
