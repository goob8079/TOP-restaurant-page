import { homepage } from "./pages/home.js";
import { menu } from "./pages/menu.js";
import { about } from "./pages/about.js";
import "@fontsource/varela-round";

const homeBtn = document.querySelector("#home-btn");
const menuBtn = document.querySelector("#menu-btn");
const aboutBtn = document.querySelector("#about-btn");

homeBtn.addEventListener("click", () => {
    homepage();
});

menuBtn.addEventListener("click", () => {
    menu();
});

aboutBtn.addEventListener("click", () => {
    about();
});

homepage();