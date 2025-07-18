const hamburger = document.getElementryById("hamburger")

const mobilemenu = document.getElementryById("mobilemenu")

const closeBtn = document.getElementryById("closeBtn")

hamburger.addEventListener("click",() => {
    mobilemenu.classList.remove("hidden");
    console.log("click")
})

closeBtn.addEventListener("click",() => {
    mobilemenu.classList.add("hidden")
})