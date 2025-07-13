import "../styles/about.css";
import chowderImg from "../assets/Chowder.png";
import mungDaalImg from "../assets/Mung_Daal_S2.png";
import shnitzelImg from "../assets/Shnitzel.svg";
import truffleImg from "../assets/Truffles_S2.png";

const content = document.querySelector("#content");

export function about() {
    content.innerHTML = "";
    
    const crewDiv = document.createElement("div");
    crewDiv.setAttribute("class", "crew-div");

    const desc = document.createElement("div");
    desc.setAttribute("class", "desc");
    desc.textContent = "We are Mung Daal's Catering! We are located in Marzipan City."
    crewDiv.appendChild(desc);

    const chowder = new Image();
    chowder.setAttribute("id", "chowder");
    chowder.src = chowderImg;
    chowder.alt = "Chowder";
    crewDiv.appendChild(chowder);

    const mungDaal = new Image();
    mungDaal.setAttribute("id", "mung-daal");
    mungDaal.src = mungDaalImg;
    mungDaal.alt = "Mung Daal";
    crewDiv.appendChild(mungDaal);

    const truffle = new Image();
    truffle.setAttribute("id", "truffle");
    truffle.src = truffleImg;
    truffle.alt = "Truffle";
    crewDiv.appendChild(truffle);

    const shnitzel = new Image();
    shnitzel.setAttribute("id", "shnitzel");
    shnitzel.src = shnitzelImg;
    shnitzel.alt = "Chowder";
    crewDiv.appendChild(shnitzel);

    content.appendChild(crewDiv);
}