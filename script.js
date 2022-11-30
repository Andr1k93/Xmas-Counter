const days = document.querySelector('#days')

const xmasMs = new Date(2022, 11, 25).getTime()
const msToDay =1000 * 60 * 60 * 24
const msToHour = 1000 * 60 *60
const msToMinutes = 1000 * 60
let currentMs = new Date().getTime()

if(xmasMs - currentMs > 0){
    const counterTimer = setInterval(myTimer, 1000)
    function myTimer(){
        currentMs = new Date().getTime()
        let daysResult= Math.floor((xmasMs - currentMs) / msToDay)
        const hours = document.querySelector('#hours')
        let result = Math.floor((xmasMs - currentMs) / msToHour) - ((Math.floor((xmasMs - currentMs) / msToDay))*24)
        const minutes = document.querySelector('#minutes')
        let minutesResult = Math.floor((xmasMs - currentMs) / msToMinutes) - (result *60) -(daysResult *24*60)
        const seconds = document.querySelector('#seconds')
        days.innerHTML = Math.floor((xmasMs - currentMs) / msToDay)
        hours.innerHTML = Math.floor((xmasMs - currentMs) / msToHour) - ((Math.floor((xmasMs - currentMs) / msToDay))*24)
        minutes.innerHTML = Math.floor((xmasMs - currentMs) / msToMinutes) - (result *60) -(daysResult *24*60)
        seconds.innerHTML = Math.floor((xmasMs - currentMs) / 1000) - (minutesResult*60) - (result *60*60) - (daysResult*24*60*60)
    }
} else {
    const xmas = document.querySelector('.merry-xmas')
    xmas.innerHTML = 'MERRY XMAS'
}
