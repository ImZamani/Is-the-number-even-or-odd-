let $ = document
let input = $.querySelector(".input")
let btn = $.querySelector(".btn")
let showResult = $.querySelector(".showResult")


btn.addEventListener("click" , ()=> {
    let inputValue = input.value
    
    if (inputValue % 2 == 0){
        showResult.innerHTML = `The number ${inputValue} is even ;)`
    } else {
        showResult.innerHTML = `The number ${inputValue} is odd ;)`
    }
})