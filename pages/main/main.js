export default (contentDiv) => {
  fetch("./pages/main/main.html")
    .then((response) => response.text())
    .then((aboutHtml) => {
      contentDiv.innerHTML = aboutHtml;})
      .then(runTypingGame)
};

function runTypingGame(){
  {
    const randomQuoteAPI = 'http://api.quotable.io/random'
    const textDisplayElement = document.getElementById('textDisplay')
    const textInputElement = document.getElementById('textInput')
    const timerElement = document.getElementById('timer')
    
    textInputElement.addEventListener('input', () => {
      const arrayQuote = textDisplayElement.querySelectorAll('span')
      const arrayValue = textInputElement.value.split('')
    
      let correct = true
      arrayQuote.forEach((characterSpan, index) => {
        const character = arrayValue[index]
        if (character == null) {
          characterSpan.classList.remove('correct')
          characterSpan.classList.remove('incorrect')
          correct = false
        } else if (character === characterSpan.innerText) {
          characterSpan.classList.add('correct')
          characterSpan.classList.remove('incorrect')
        } else {
          characterSpan.classList.remove('correct')
          characterSpan.classList.add('incorrect')
          correct = false
        }
      })
    
      if (correct) renderNewQuote()
    })
    
    function getRandomQuote() {
      return fetch(randomQuoteAPI)
        .then(response => response.json())
        .then(data => data.content)
    }
    
    async function renderNewQuote() {
      const quote = await getRandomQuote()
      textDisplayElement.innerHTML = ''
      quote.split('').forEach(character => {
        const characterSpan = document.createElement('span')
        characterSpan.innerText = character
        textDisplayElement.appendChild(characterSpan)
      })
      textInputElement.value = null
      startTimer()
    }
    
    let startTime
    function startTimer() {
      timerElement.innerText = 0
      startTime = new Date()
      setInterval(() => {
        timer.innerText = getTimerTime()
      }, 1000)
    }
    
    function getTimerTime() {
      return Math.floor((new Date() - startTime) / 1000)
    }
    
    renderNewQuote()
    }
}
