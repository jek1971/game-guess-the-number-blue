
let name = '';//что єто
let input = document.querySelector('.field_input');
let btn = document.querySelector('.field_btn');//проверка кнопка
let chek = document.querySelector('.result_chek_out');
let help = document.querySelector('.result_help_out');
let count = document.querySelector('.result_count_out');
let new_btn = document.getElementById('new_btn');
let end_btn = document.getElementById('end_btn');

let item = 0;/*число попыток*/
let randNum = 1 + Math.floor(Math.random() * 100);



function numer() {
  if (event.keyCode != 43 && event.keyCode < 48 || event.keyCode > 57)
    event.preventDefault();//блокирует ввод символов кроме цыфр
};
/*
new_btn.onclick = function (event) {
  userNum = 0;

  let text = document.getElementById("desc_Subtitle").textContent;
  document.getElementById("desc_Subtitle").textContent = "Компьютер загадал число.";

  help.textContent = "";
  chek.textContent = " Число загадано...";
  count.textContent = "";
};//кнопка нов игра
*/
new_btn.onclick = function (event) {
  event.preventDefault();
  let text = document.getElementById("desc_Subtitle").textContent;
  document.getElementById("desc_Subtitle").textContent = "Привет! Я загадал число.";

  item = 0;
  input.value = '';
  chek.textContent = "Новая игра";
  help.textContent = "Введите число";
  count.textContent = item;
};//кнопка нов игра



end_btn.onclick = function (event) {
  event.preventDefault();
  let text = document.getElementById("desc_Subtitle").textContent;
  document.getElementById("desc_Subtitle").textContent = "До встречи. Спасибо за игру.";


  help.textContent = "";
  chek.textContent = "Игра закончена.";
  count.textContent = "";
};
//кнопка конец игры


btn.onclick = function (event) {
  event.preventDefault()/*откючает стандарт передачи формы тк нет обращения к серверу */
  userNum = input.value;/*читат и записывает  в переменную  что введено*/

  if (userNum == (input == (''))) {
    chek.textContent = " нет данных";
    help.textContent = "введите число";
    count.textContent = item;/*проверка заполнености  input*/
  }
  //Чем отличается innerHTML от textContent?
  //textContent получает содержимое всех элементов, включая <script> и <style> , 
  //тогда как innerText этого не делает. innerText умеет считывать стили и не возвращает содержимое скрытых элементов, тогда как textContent этого не делает.
  // Метод innerText позволяет получить CSS, а textContent — нет
  else if (userNum > randNum) {
    chek.textContent = userNum + " Неверно";
    help.textContent = "Число меньше";
    item++;
    count.textContent = item;

  } else if (userNum < randNum) {
    chek.textContent = userNum + " Неверно";
    help.textContent = "Число больше";
    item++;
    count.textContent = item;
  } else if (userNum = randNum) {
    chek.textContent = " Вы выиграли";
    help.textContent = "Это число = " + userNum;
    item++;
    count.textContent = item;
  }

  input.value = '';//очищает input
};



