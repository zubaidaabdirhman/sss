let btn = document.querySelector("#btn")
let mylabel = document.querySelector("#mylabel")
let mytitle = document.querySelector("#mytitle")
let box1 = document.querySelector(".box1")
let box2 = document.querySelector(".box2")
let box3 = document.querySelector(".box3")
let box4 = document.querySelector(".box4")
let box5 = document.querySelector(".box5")
let box6 = document.querySelector(".box6")
let box7 = document.querySelector(".box7")
let box8 = document.querySelector(".box8")
let box9 = document.querySelector(".box9")
let box10 = document.querySelector(".box10")




// let x = 3.32
// let y = 5.3
// let z = Math.round(x)
// let z = Math.floor(x)
// let z = Math.sin(x)
// let z = Math.pow(x,y)
// let z = Math.tan(x)
// let z = Math.sqrt(x)
// let z = Math.sign(x)
// let z = Math.min(x,y)
// let z = Math.max(x,y)
// console.log(z)
btn.addEventListener("click", () => {

    let min = 1
    let max = 10
    let total = Math.floor(Math.random() * (max - min) + min)
    if (total === 1) {
        box1.style.display = "block"
        box1.style.backgroundColor = "hotpink"
        box2.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "none"
        box5.style.display = "none"
        box6.style.display = "none"
        box7.style.display = "none"
        box8.style.display = "none"
        box9.style.display = "none"
        box10.style.display = "none"
    } else if (total === 2) {
        box2.style.display = "block"
        box1.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "none"
        box5.style.display = "none"
        box6.style.display = "none"
        box7.style.display = "none"
        box8.style.display = "none"
        box9.style.display = "none"
        box10.style.display = "none"
         box2.style.backgroundColor = "hotpink"
    } else if (total === 3) {
        box3.style.display = "block"
        box1.style.display = "none"
        box2.style.display = "none"
        box4.style.display = "none"
        box5.style.display = "none"
        box6.style.display = "none"
        box7.style.display = "none"
        box8.style.display = "none"
        box9.style.display = "none"
        box10.style.display = "none"
        box3.style.backgroundColor = "rgb(62, 0, 128)"
    } else if (total === 4) {
        box4.style.display = "block"
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
        box5.style.display = "none"
        box6.style.display = "none"
        box7.style.display = "none"
        box8.style.display = "none"
        box9.style.display = "none"
        box10.style.display = "none"
         box4.style.backgroundColor = "purple"
    } else if (total === 5) {
        box5.style.display ="block"
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "none"
        box6.style.display = "none"
        box7.style.display = "none"
        box8.style.display = "none"
        box9.style.display = "none"
        box10.style.display = "none"
         box5.style.backgroundColor = "brown"
    }
    else if (total === 6) {
        box6.style.display = "block"
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "none"
        box5.style.display = "none"
        box7.style.display = "none"
        box8.style.display = "none"
        box9.style.display = "none"
        box10.style.display = "none"
         box6.style.backgroundColor = "fuchsia"
    }
    else if (total === 7) {
        box7.style.display = "block"
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "none"
        box5.style.display = "none"
        box6.style.display = "none"
        box8.style.display = "none"
        box9.style.display = "none"
        box10.style.display = "none"
         box7.style.backgroundColor = "skyblue"
    }
    else if (total === 8) {
        box8.style.display = "block"
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "none"
        box5.style.display = "none"
        box6.style.display = "none"
        box7.style.display = "none"
        box9.style.display = "none"
        box10.style.display = "none"
         box8.style.backgroundColor = "hotpink"
    }
    else if (total === 9) {
        box9.style.display = "block"
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "none"
        box5.style.display = "none"
        box6.style.display = "none"
        box7.style.display = "none"
        box8.style.display = "none"
        box10.style.display = "none"
         box9.style.backgroundColor = "blueviolet"
    }
    else if (total === 10) {
        box10.style.display = "block"
        box1.style.display = "none"
        box2.style.display = "none"
        box3.style.display = "none"
        box4.style.display = "none"
        box5.style.display = "none"
        box6.style.display = "none"
        box7.style.display = "none"
        box8.style.display = "none"
        box9.style.display = "none"
        box10.style.backgroundColor = "red"
       
    }

    // else {
    //     box1.style.display = "none"
    //     box2.style.display = "none"
    //     box3.style.display = "none"
    //     box4.style.display = "none"
    //     box5.style.display = "none"
    //     box6.style.display = "none"
    //     box7.style.display = "none"
    //     box8.style.display = "none"
    //     box9.style.display = "none"
    //     box10.style.display = "none"
    // }


    mylabel.textContent = total





})