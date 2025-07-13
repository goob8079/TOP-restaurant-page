import "../styles/menu.css";
import burpleNurplesImg from "../assets/Burple_nurples.png";
import froggyThumpkinImg from "../assets/Froggy_Apple_Crumple_Thumpkin.png";
import wontonBombsImg from "../assets/Won_Ton_Bombs.png";

const content = document.querySelector("#content");

export function menu() {
    content.innerHTML = "";

    const firstRow = document.createElement("div");
    firstRow.setAttribute("class", "row1");
    const row1Item1 = document.createElement("div");
    row1Item1.setAttribute("id", "row1-item1");
    const item1P = document.createElement("p");
    item1P.setAttribute("id", "item1-p");
    item1P.textContent = "Burple Nurples";
    const item1Img = new Image();
    item1Img.setAttribute("id", "burple-nurples");
    item1Img.src = burpleNurplesImg;
    item1Img.alt = "Burple Nurples";
    row1Item1.appendChild(item1Img);
    row1Item1.appendChild(item1P);
    firstRow.appendChild(row1Item1);
    
    const row1Item2 = document.createElement("div");
    row1Item2.setAttribute("id", "row1-item2");
    const item2P = document.createElement("p");
    item2P.setAttribute("id", "item2-p");
    item2P.textContent = "Froggy Apple Crumple Thumpkin";
    const item2Img = new Image();
    item2Img.setAttribute("id", "froggy-thumpkin");
    item2Img.src = froggyThumpkinImg;
    item2Img.alt = "Froggy Apple Crumple Thumpkin";
    row1Item2.appendChild(item2Img);
    row1Item2.appendChild(item2P);
    firstRow.appendChild(row1Item2);

    const row1Item3 = document.createElement("div");
    row1Item3.setAttribute("id", "row1-item3");
    const item3P = document.createElement("p");
    item3P.setAttribute("id", "item3-p");
    item3P.textContent = "Won Ton Bombs";
    const item3Img = new Image();
    item3Img.setAttribute("id", "wt-bombs");
    item3Img.src = wontonBombsImg;
    item3Img.alt = "Won Ton Bombs";
    row1Item3.appendChild(item3Img);
    row1Item3.appendChild(item3P);
    firstRow.appendChild(row1Item3);
    
    content.appendChild(firstRow);
}