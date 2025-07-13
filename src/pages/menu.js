import "../styles/menu.css";
import burpleNurplesImg from "../assets/Burple_nurples.png";
import froggyThumpkinImg from "../assets/Froggy_Apple_Crumple_Thumpkin.png";
import wontonBombsImg from "../assets/Won_Ton_Bombs.png";
import meviledEggsImg from "../assets/Meviled_Eggs.png";
import mineMeachPieImg from "../assets/Mince_Meach_Pie.png";
import fireSnackerImg from "../assets/Fire_Snacker.png";
import shickenSoquitosImg from "../assets/Shicken_Soquitos.png";
import meetAndGreetBallsImg from "../assets/Meet_And_Greet_Balls.png";
import teddyBearSurpriseIimg from "../assets/Teddy_Bear_Surprise.png";

const content = document.querySelector("#content");

export function menu() {
    content.innerHTML = "";

    const firstRow = document.createElement("div");
    firstRow.setAttribute("class", "row1");

    const row1Item1 = document.createElement("div");
    row1Item1.setAttribute("class", "item1");
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
    row1Item2.setAttribute("class", "item2");
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
    row1Item3.setAttribute("class", "item3");
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

    const seccondRow = document.createElement("div");
    seccondRow.setAttribute("class", "row2");

    const row2Item1 = document.createElement("div");
    row2Item1.setAttribute("class", "item1");
    const r2Item1P = document.createElement("p");
    r2Item1P.setAttribute("id", "item1-p");
    r2Item1P.textContent = "Meviled Eggs";
    const r2Item1Img = new Image();
    r2Item1Img.setAttribute("id", "meviled-eggs");
    r2Item1Img.src = meviledEggsImg;
    r2Item1Img.alt = "Meviled Eggs";
    row2Item1.appendChild(r2Item1Img);
    row2Item1.appendChild(r2Item1P);
    seccondRow.appendChild(row2Item1);

    const row2Item2 = document.createElement("div");
    row2Item2.setAttribute("class", "item1");
    const r2Item2P = document.createElement("p");
    r2Item2P.setAttribute("id", "item2-p");
    r2Item2P.textContent = "Mince Meach Pie";
    const r2Item2Img = new Image();
    r2Item2Img.setAttribute("id", "mince-meach-pie");
    r2Item2Img.src = mineMeachPieImg;
    r2Item2Img.alt = "Mine Meach Pie";
    row2Item2.appendChild(r2Item2Img);
    row2Item2.appendChild(r2Item2P);
    seccondRow.appendChild(row2Item2);

    const row2Item3 = document.createElement("div");
    row2Item3.setAttribute("class", "item1");
    const r2Item3P = document.createElement("p");
    r2Item3P.setAttribute("id", "item1-p");
    r2Item3P.textContent = "Fire Snacker";
    const r2Item3Img = new Image();
    r2Item3Img.setAttribute("id", "fire-snacker");
    r2Item3Img.src = fireSnackerImg;
    r2Item3Img.alt = "Fire Snacker";
    row2Item3.appendChild(r2Item3Img);
    row2Item3.appendChild(r2Item3P);
    seccondRow.appendChild(row2Item3);

    const thirdRow = document.createElement("div");
    thirdRow.setAttribute("class", "row3");

    const row3Item1 = document.createElement("div");
    row3Item1.setAttribute("class", "item1");
    const r3Item1P = document.createElement("p");
    r3Item1P.setAttribute("id", "item1-p");
    r3Item1P.textContent = "Shicken Soquitos";
    const r3Item1Img = new Image();
    r3Item1Img.setAttribute("id", "shicken-soquitos");
    r3Item1Img.src = shickenSoquitosImg;
    r3Item1Img.alt = "Shicken Soquitos";
    row3Item1.appendChild(r3Item1Img);
    row3Item1.appendChild(r3Item1P);
    thirdRow.appendChild(row3Item1);

    const row3Item2 = document.createElement("div");
    row3Item2.setAttribute("class", "item1");
    const r3Item2P = document.createElement("p");
    r3Item2P.setAttribute("id", "item2-p");
    r3Item2P.textContent = "Meet and Greet Balls";
    const r3Item2Img = new Image();
    r3Item2Img.setAttribute("id", "meet-balls");
    r3Item2Img.src = meetAndGreetBallsImg;
    r3Item2Img.alt = "Meet and Greet Balls";;
    row3Item2.appendChild(r3Item2Img);
    row3Item2.appendChild(r3Item2P);
    thirdRow.appendChild(row3Item2);

    const row3Item3 = document.createElement("div");
    row3Item3.setAttribute("class", "item1");
    const r3Item3P = document.createElement("p");
    r3Item3P.setAttribute("id", "item3-p");
    r3Item3P.textContent = "Teddy Bear Surprise";
    const r3Item3Img = new Image();
    r3Item3Img.setAttribute("id", "teddy-bear-surprise");
    r3Item3Img.src = teddyBearSurpriseIimg;
    r3Item3Img.alt = "Teddy Bear Surprise";
    row3Item3.appendChild(r3Item3Img);
    row3Item3.appendChild(r3Item3P);
    thirdRow.appendChild(row3Item3);
    
    content.appendChild(firstRow);
    content.appendChild(seccondRow);
    content.appendChild(thirdRow);
}