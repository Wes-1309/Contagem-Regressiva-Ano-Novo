const secondContainer = document.querySelector('#seconds')
const minutesContainer = document.querySelector('#minutes')
const hoursContainer = document.querySelector('#hours')
const daysContainer = document.querySelector('#days')
const nextYearContainer = document.querySelector('#year')
const spinerLoading = document.querySelector('#loading')
const countdownContainer = document.querySelector('#countdown')

const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

nextYearContainer.textContent = nextYear

const updateCountdown = () => {
    const currentTime = new Date()
    const difference = newYearTime - currentTime
    const days = Math.floor(difference / 1000 / 60 / 60 / 24)//Para obter a quantidade de dias - Floor para arredondar para baixo
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24//Para obter a quantidade de horas
    const minutes = Math.floor(difference / 1000 / 60) % 60//Para obter a quantidade de minutos
    const seconds = Math.floor(difference / 1000) % 60//Para obter a quantidade de segundos


    secondContainer.textContent = seconds < 10 ? '0' + seconds : seconds
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours
    daysContainer.textContent = days

}

setTimeout(() => {
    spinerLoading.remove()
    countdownContainer.style.display = 'flex'
}, 1000)

setInterval(updateCountdown, 1000)