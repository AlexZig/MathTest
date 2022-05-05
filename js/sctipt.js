let statistic = document.querySelector('.statistic');
let statisticShow = document.querySelector('.statistic-show');
let statisticReset = document.querySelector('.statistic-reset');
let statisticBox = document.querySelector('.statistic-box');
let correctAnswerNumber = 0;
let wrongAnswerNumber = 0;
// 
let test = document.querySelector('.test');
let testButtonAll = document.querySelectorAll('.test button');
let testBox = document.querySelector('.test-box');
let testText = document.querySelector('.test-text');
// 
let input = document.querySelector('input');
let correctNumber;
let numberMin = 1;
let numberMax = 10;
// 
let select = document.querySelector('select');
//
audio = document.createElement('audio');

function audioPlay() {
  audio.setAttribute('src', 'Появление.mp3');
  audio.play();
}

function getRandomNumber (min,max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

select.onchange = function () {
  let level = select.value;
  if (level == 'esey'){
    numberMin = 1;
    numberMax = 10;
  }else if (level == 'medium'){
    numberMin = 11;
    numberMax = 100;
  }else{
    numberMin = 101;
    numberMax = 1000;
  }
}

for (let buttonNumber = 0; buttonNumber < testButtonAll.length; buttonNumber++) {
  let testButton = testButtonAll[buttonNumber];
  testButton.onclick = function () {
    if (testButton.classList.contains('submit')){
      let userNumber = input.value;
      if (userNumber != ""){
        testBox.querySelector('span').style.opacity = 0;
        if (userNumber == correctNumber ){
          testBox.classList.add('check_ok');
          setTimeout(() => {
            testBox.querySelector('span').style.opacity = 1;
            testText.innerHTML = "Отлично! Всё верно.";
            correctAnswerNumber++;
          }, 500);
        }else{
          testBox.classList.add('check_error');
          setTimeout(() => {
            testBox.querySelector('span').style.opacity = 1;
            testText.innerHTML = "Ошибочка! Правильный ответ- " + "'" + correctNumber+ "'";
            wrongAnswerNumber++;
          }, 500);
        }
        setTimeout(() => {
          test.classList.add('_zero');
          testBox.querySelector('span').style.opacity = 0;
          setTimeout(() => {
            testBox.classList.remove('check_error');
            testBox.classList.remove('check_ok');
            testBox.classList.remove('box_active');
            test.classList.remove('_zero');
            testBox.querySelector('span').style.opacity = 1;
            input.value = "";
          }, 400);
        }, 3000);
      }
      else{
        alert('введите ответ');
      }
    }else{
      let numberA = getRandomNumber(numberMin,numberMax);
      let numberB = getRandomNumber(numberMin,numberMax);
      if (testButton.classList.contains('plus')) {
        correctNumber = numberA + numberB;
        testText.innerHTML = numberA + ' + ' + numberB + ' = ';
      }else if (testButton.classList.contains('minus')){
        correctNumber = numberA - numberB;
        testText.innerHTML = numberA + ' - ' + numberB + ' = ';
      }else if (testButton.classList.contains('multiply')){
        correctNumber = numberA * numberB;
        testText.innerHTML = numberA + ' * ' + numberB + ' = ';
      }else if (testButton.classList.contains('divide')){
        correctNumber = Math.round(numberA / numberB);
        testText.innerHTML = numberA + ' / ' + numberB + ' = !ОКРУГЛИ!';
      }
      test.classList.add('_zero');
      input.setAttribute('autofocus', false);
        setTimeout(() => {
          audioPlay();
          testBox.classList.add('box_active');
          test.classList.remove('_zero');
          input.setAttribute('autofocus', true);
      }, 400);
    }
  }
}

statisticShow.onclick = function () {
  statistic.classList.add('_zero');
  let statisticList = `Ответы: \r\n
    Правельные - ${correctAnswerNumber}
    Неправельные - ${wrongAnswerNumber} 
    `;
  statisticBox.innerHTML = statisticList;
  setTimeout(() => {
    audioPlay();
    statisticBox.classList.add('box_active');
    statistic.classList.remove('_zero');
  }, 400);
}
statisticReset.onclick = function () {
  statistic.classList.add('_zero');
  setTimeout(() => {
    audio.setAttribute('src', 'Появление.mp3');
    audio.play();
    statisticBox.classList.add('box_active');
    statistic.classList.remove('_zero');
  }, 400);
}
statisticBox.onclick = function () {
  statistic.classList.add('_zero');
  setTimeout(() => {
    audioPlay();
    statisticBox.classList.remove('box_active');
    statistic.classList.remove('_zero');
  }, 400);
}


