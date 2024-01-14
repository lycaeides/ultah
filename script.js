// const myAudio = document.getElementById('myAudio').play()
const queryString = window.location.search
const urlParam = new URLSearchParams(queryString)
const nameParam = urlParam.get('name')

const bestie = document.getElementById('bestie')

bestie.textContent = nameParam


// Credit to Amri


