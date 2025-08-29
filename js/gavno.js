const button = document.querySelector(".button")
const counter = document.querySelector(".counter")

var age = 20

let counetNumber = 0

if (counetNumber === true) {
  counter.textContent = counetNumber
}

button.addEventListener("click", () => {
  counetNumber++
  counter.textContent = counetNumber
})

const bool = true
const text = "text"
const number = 123

const huinya = null
const und = undefined

// console.log(typeof bool)
// console.log(typeof text)
// console.log(number)

// console.log(typeof huinya)

// console.log(und)

let zalupa

// console.log(zalupa)

const Danyl = {
  name: "Danyl",
  age: 20,
  isProgrammer: true,
}

const user = {
  name: "Danyl",
  age: 20,
  isProgrammer: true,
  friends: ["misha", "vasya", "petya"],
}

function sayPrivet() {
  console.log("privet")
}

// console.log(MISHA)

// console.log(MISHA)
// console.log(misha2)

// sayPrivet()

// console.log(Danyl)

const array = [
  "asdasd",
  "true",
  "123123",
  "asdasd",
  "true",
  "123123",
  "asdasd",
  "true",
  "true",
  "true",
  "true",
  "true",
  "true",
]
const MISHA = {
  name: "misha",
  age: 20,
  isProgrammer: true,

  changeAge: function () {
    this.age = 666
  },
}

const body = document.querySelector("body")

array.forEach((item) => {
  const newDiv = document.createElement("div")
  newDiv.textContent = item
  body.append(newDiv)
})

for (let key in MISHA) {
  const value = MISHA[key]

  if (typeof value !== "function") {
    const newDiv = document.createElement("div")
    newDiv.textContent = value
    body.append(newDiv)
  }
}
