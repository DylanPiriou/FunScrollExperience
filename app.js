const stickyElements = [...document.querySelectorAll(".sticky")];
console.log(stickyElements)

window.addEventListener("scroll", () => {
    for (let i = 0; i < stickyElements.length; i++) {
        transform(stickyElements[i])
    }

    function transform(section) {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector(".scroll-section");
        console.log(scrollSection)
        let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
        // percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
        scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
    }
})


// PROGRESS BAR
const bar = document.querySelector(".bar");

window.addEventListener("scroll", () => {
    const totalHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / (fullHeight - totalHeight)) * 100;
    bar.style.width = `${progress}%`;
})