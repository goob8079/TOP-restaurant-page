import { homepage } from "./pages/home.js";
import "./styles/homepage.css";
import "@fontsource/varela-round";

const home = document.querySelector("#home-btn");
const menu = document.querySelector("#menu-btn");
const about = document.querySelector("#about-btn");

home.addEventListener("click", () => {
    homepage();
});

homepage();