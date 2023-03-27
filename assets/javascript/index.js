const _mainpage = document.getElementById("mainpage")
const _mainnavbar = document.getElementById("mainnavbar")
const _mainfooter = document.getElementById("mainfooter")
const _switchdark = document.getElementById("switch-dark")
const _mainbtngenre = document.getElementById("mainbtngenre")
const _textbtngenre = document.getElementById("textbtngenre")
const _dark = document.getElementById("dark")
const _light = document.getElementById("light")
const _buttonnavbar = document.getElementById("buttonnavbar")

_mainpage.style.backgroundColor = '#151515'
_mainnavbar.style.backgroundColor = 'black'
_mainfooter.style.backgroundColor = 'black'
_mainbtngenre.style.borderColor = 'white'
_textbtngenre.style.color = 'white'
_buttonnavbar.removeChild(_light)
_dark.innerText = 'Light'

_switchdark.onclick = function() {
      if (_mainpage.style.backgroundColor === 'white') {
          _mainpage.style.backgroundColor = '#151515'
          _mainnavbar.style.backgroundColor = 'black'
          _mainfooter.style.backgroundColor = 'black'
          _mainbtngenre.style.borderColor = 'white'
          _textbtngenre.style.color = 'white'
          _buttonnavbar.removeChild(_dark)
          _buttonnavbar.appendChild(_light)
         
      } else {
          _mainpage.style.backgroundColor = 'white'
          _mainnavbar.style.backgroundColor = '#8D8B8B'
          _mainfooter.style.backgroundColor = '#8D8B8B'
          _mainbtngenre.style.borderColor = '#6B4FDD'
          _textbtngenre.style.color = '#6B4FDD'
          _buttonnavbar.appendChild(_dark)
          _buttonnavbar.removeChild(_light)
          _dark.innerText = 'Dark'
    
      }
}

