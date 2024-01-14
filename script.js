const myAudio = document.getElementById('myAudio')
const queryString = window.location.search
const urlParam = new URLSearchParams(queryString)
const nameParam = urlParam.get('name')

const bestie = document.getElementById('bestie')

bestie.textContent = nameParam

// myAudio.autoplay = true

// if (myAudio) {
//   myAudio.onload()
// }

// Credit to Amri


