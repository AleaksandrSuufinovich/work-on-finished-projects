const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');

// Options
const showAmPm = true;

// Show Time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Set AM or PM
  const amPm = hour >= 12 ? 'PM' : 'AM';



  // Output Time
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} ${showAmPm ? amPm : ''}`;

  setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Set Background and Greeting
function setBgGreet() {
  let today = new Date(),
    hour = 17;

    if (hour >= 0) {
        //ночь
        document.getElementById("background").style.background = "url('https://i.postimg.cc/ZY7jkjZD/imgonline-com-ua-Resize-Gkkca-GIiw-M2-Ed8f.jpg') no-repeat";
        document.getElementById("background").style.backgroundSize = "2000px 1000px";
        greeting.textContent = 'Добрейшей ночи! ';
    } 
    
    if (hour >= 5) {
        //утро
        document.getElementById("background").style.background = "url('https://cdn.discordapp.com/attachments/366660049793449989/790576452230709268/1567487597167482873.jpg') no-repeat";
        document.getElementById("background").style.backgroundSize = "2000px 1000px";
        greeting.textContent = 'Wake the fuck up, samurai, ';
    }
    
    if (hour >= 11) {
        //день
        document.getElementById("background").style.background = "url('https://i.postimg.cc/pTFHzy2D/imgonline-com-ua-Resize-Y5-BPve-Qu-PDv05.jpg') no-repeat";
        document.getElementById("background").style.backgroundSize = "2000px 1000px";
        greeting.textContent = 'Добрейшего Дня! ';
    }
    
    if (hour >= 17) {
        //вечер
        document.getElementById("background").style.background = "url('https://i.postimg.cc/xCML7yfq/imgonline-com-ua-Resize-9-XQDp-ET7-R7-X3.jpg') no-repeat";
        document.getElementById("background").style.backgroundSize = "2000px 1000px";
        greeting.textContent = 'Добрейшего Вечерочка! ';
    }
    
    if (hour >= 22) {
        //ночь
        document.getElementById("background").style.background = "url('https://i.postimg.cc/ZY7jkjZD/imgonline-com-ua-Resize-Gkkca-GIiw-M2-Ed8f.jpg') no-repeat";
        document.getElementById("background").style.backgroundSize = "2000px 1000px";
        greeting.textContent = 'Добрейшей ночи! ';
    }
    }

// Get Name
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Enter Name]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Enter Focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
