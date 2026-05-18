/*const el = document.createElement("div")
const btn = document.getElementById("button")
const btn = document.getElementsByClassName("button")
const btn = document.getElementsByTagName("button")
const btn = document.querySelector(".btn > ")*/

//const box = document.createElement("input")
//const miban = document.createElement("p")
//box.setAttribute("type", "password")
//box.setAttribute("placeholder", "password")
//const attr = box.getAttribute("type")
//miban.innerText= attr

//document.body.prepend(box)
//box.after(miban)

/*const board = document.getElementById("board")
const status = document.getElementById("status")
const cells = document.querySelectorAll(".cell")

let player = true
let game = true

const state = new Array(9).fill(null)

const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

cells.forEach((cell, i) => {
    cell.addEventListener("click", () => {
        if (!game) {
            return
        }
        if (cell.innerHTML) {
            return
        }
        const p = document.createElement("div")
        p.className = player ? "x" : "o"
        cell.appendChild(p)
        state[i] = player
        if (checkWin(player)) {
            status.textContent = `${player ? "X" : "O"} haxtecin`
        }
        else if (!state.includes(null)) {

            status.textContent = `Nichya`
        }
        player = !player

    })
})

function checkWin(turn) {
    return wins.some(pattern => {
        return pattern.every(pat => state[pat] === turn)
    })
}*/

















/*class Dzuk {
    constructor(anun, tesak, gin){
        this.anun = anun
        this.tesak = tesak
        this.gin = gin
        
    }
    privet() {
        console.log (`${this.anun} ${this.tesak} kilon ${this.gin} dram `)
    }
}
const tuzik = new Dzuk ("tuzik", "karmraxayt", 3000 )
const max = new Dzuk ("Max", "ishxan", 5000)
const jeko = new Dzuk ("jeko", "gupi", 500)

console.log(tuzik, max, jeko )

tuzik.privet()
max.privet()
jeko.privet()










class Transport{
    constructor(maknish){
        this.maknish = maknish
    }

}
class Avto extends Transport {
    constructor(maknish, aragutyun){
    super(maknish)
    this.aragutyun = aragutyun
}
barev(){
    console.log(`${this.maknish} ${this.aragutyun} km/h aragutyamb`)
}
}

const buggati = new Avto ("buggati", 300)
const bmw = new Avto ("bmw", 240)
const mercedec = new Avto ("mercedec", 220)
console.log(buggati, bmw, mercedec)
buggati.barev()
bmw.barev()
mercedec.barev()*/
