const userText = document.querySelector('#userText');
const cript = document.querySelector('.encript1');
const descript = document.querySelector('.encript2');
const finalResult = document.querySelector('.finalResult');
const copy = document.querySelector('#copy')

cript.addEventListener('click', function () {
  let textValue = userText.value
    .replaceAll('e', 'enter')
    .replaceAll('i', 'imes')
    .replaceAll('a', 'ai')
    .replaceAll('o', 'ober')
    .replaceAll('u', 'ufat');
  finalResult.innerHTML = textValue;
});
descript.addEventListener('click', function () {
  let textValue = userText.value
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ai', 'a')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');
  finalResult.innerHTML = textValue;
});
copy.addEventListener('click', function() {
  if (navigator.clipboard) {
  navigator.clipboard.writeText(finalResult.textContent)
  copy.classList.add('greenButton')
  copy.innerHTML = 'Copiado!'
  }
})