const keyBox = document.querySelector("#key-box")
const keyOutput = document.querySelector("#key-output")
const savedWordText = document.querySelector("#saved-word")
const range = document.querySelector("#range")

// 1. keydown (OBS specify does not work with copy and paste)
// 2. keyup 
// 3. event.key 
// 4. using event.key inside an if -> Enter saves the word, Escape clears the input
// 5. event.target
// 6. event.target.value 
// 7. input event -> show that it works with copy na dpaste but nor with enter
// 8. input vs change
// 9. BONUS: listen on the whole document -> global shortcut, press "d" for dark mode





















































































/*range.addEventListener("input", (event) => {
    console.log("INPUT", event.target.value)
    document.querySelector("#range-value").textContent = event.target.value
})

range.addEventListener("change", (event) => {
    console.log("CHANGE (released!)", event.target.value)
})*
/*     (we skip it when typing inside an input, otherwise every "d" would toggle!)
document.addEventListener("keydown", (event) => {
    if (event.target.tagName === "INPUT") return
    if (event.key === "d") {
        document.body.classList.toggle("dark")
    }
})*/
