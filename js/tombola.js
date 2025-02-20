const createNumberCell = function () {
  for (let i = 0; i < 90; i++) {
    const cell = document.createElement("div")
    cell.classList.add("num")
    const cellNumber = document.createElement("p")
    cellNumber.innerText = i + 1
    cell.appendChild(cellNumber)
    const tabellone = document.getElementById("tabellone")
    tabellone.appendChild(cell)
  }
}
createNumberCell()

const generateNumber = function (e) {
  const buttonRandomNumber = document.getElementsByTagName("button")
  buttonRandomNumber.addEventlistener("submit", (e) => {
    const randomNumber = Math.floor(Math.random() * 99)
  })

  return randomNumber
}
