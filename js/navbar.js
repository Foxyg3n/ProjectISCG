var sectionBg = document.getElementById("section-bg");
var previousEl = home;
var animationEnd = false;

document.getElementById("home").addEventListener('animationend', () => {if(home.classList.contains("animate__fadeInRight")) animationEnd = true});
document.getElementById("gallery").addEventListener('animationend', () => {if(gallery.classList.contains("animate__fadeInRight")) animationEnd = true});
document.getElementById("administration").addEventListener('animationend', () => {if(administration.classList.contains("animate__fadeInRight")) animationEnd = true});
document.getElementById("map").addEventListener('animationend', () => {if(map.classList.contains("animate__fadeInRight")) animationEnd = true});

const switchScene = (element) => {
    if(!(previousEl.id == element) && animationEnd) {
        animationEnd = false;
        removeAnimations();
        previousEl.classList.add("animate__fadeOutRight");
        sectionBg.classList.add("animate__fadeOutRight");
        setTimeout( () => {
            document.getElementById(element).classList.remove("hidden");
            previousEl.classList.add("hidden");
            document.getElementById(element).classList.add("animate__fadeInRight");
            sectionBg.classList.remove("animate__fadeOutRight");
            sectionBg.classList.add("animate__fadeInRight");
            previousEl = document.getElementById(element);
        }, 1200);
    }
}

const removeAnimations = () => {
    home.classList.remove("animate__fadeInRight", "animate__fadeOutRight");
    gallery.classList.remove("animate__fadeInRight", "animate__fadeOutRight");
    administration.classList.remove("animate__fadeInRight", "animate__fadeOutRight");
    map.classList.remove("animate__fadeInRight", "animate__fadeOutRight");
    sectionBg.classList.remove("animate__fadeInRight", "animate__fadeOutRight");
}