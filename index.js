(() => {
    let e = document.querySelectorAll(".btn--language__selector")
    e.forEach(e => {
        e.addEventListener("click", function () {
            let wrapper = document.querySelectorAll(".wrapper")
            if (this.classList.contains("english")) {
                wrapper[0].classList.add("active")
                wrapper[1].classList.remove("active")
            } else {
                wrapper[1].classList.add("active")
                wrapper[0].classList.remove("active")
            }
        })
    })
})();