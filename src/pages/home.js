import "../styles/homepage.css";
import { menu } from "../pages/menu.js";
import chowderCrewImg from "../assets/chowder_crew.jpg";
import burpleNurplesImg from "../assets/Burple_nurples.png";
import froggyThumpkinImg from "../assets/Froggy_Apple_Crumple_Thumpkin.png";
import wontonBombsImg from "../assets/Won_Ton_Bombs.png";

const content = document.querySelector("#content");

export function homepage() {
    content.innerHTML = "";
    
    const titleDiv = document.createElement("div")
    titleDiv.setAttribute("class", "title-div");
    titleDiv.style.backgroundImage = `url(${chowderCrewImg})`;
    titleDiv.style.backgroundPosition = "center";

    const title = document.createElement("div")
    title.setAttribute("id", "title");
    title.textContent = "Mung Daal's Catering";

    const desc = document.createElement("div")
    desc.setAttribute("id", "desc");
    desc.textContent = "Foods delivered by sundown are free.";
    
    titleDiv.appendChild(title);
    titleDiv.appendChild(desc);
    content.appendChild(titleDiv);
    /* ------------------------------------------------------------ */
    const chefsRecommendation = document.createElement("div");
    chefsRecommendation.setAttribute("class", "chefs-recommendation");

    const recommendationTitle = document.createElement("div");
    recommendationTitle.setAttribute("id", "recommendation-title");
    recommendationTitle.textContent = "Chef's Recommendation"
    chefsRecommendation.appendChild(recommendationTitle);

    const chefsDiv = document.createElement("div");
    chefsDiv.setAttribute("class", "chefs-div");

    const foodItem1 = document.createElement("div");
    foodItem1.setAttribute("id", "food-item1");
    const item1P = document.createElement("p");
    item1P.setAttribute("id", "item1-p");
    item1P.textContent = "Burple Nurples";
    const item1Img = new Image();
    item1Img.setAttribute("id", "burple-nurples");
    item1Img.src = burpleNurplesImg;
    item1Img.alt = "Burple Nurples";
    item1Img.addEventListener("click", () => {
        menu();
    });
    foodItem1.appendChild(item1Img);
    foodItem1.appendChild(item1P);
    chefsDiv.appendChild(foodItem1);

    const foodItem2 = document.createElement("div");
    foodItem2.setAttribute("id", "food-item2");
    const item2P = document.createElement("p");
    item2P.setAttribute("id", "item2-p");
    item2P.textContent = "Froggy Apple Crumple Thumpkin";
    const item2Img = new Image();
    item2Img.setAttribute("id", "froggy-thumpkin");
    item2Img.src = froggyThumpkinImg;
    item2Img.alt = "Froggy Apple Crumple Thumpkin";
    item2Img.addEventListener("click", () => {
        menu();
    });
    foodItem2.appendChild(item2Img);
    foodItem2.appendChild(item2P);
    chefsDiv.appendChild(foodItem2);

    const foodItem3 = document.createElement("div");
    foodItem3.setAttribute("id", "food-item3");
    const item3P = document.createElement("p");
    item3P.setAttribute("id", "item3-p");
    item3P.textContent = "Won Ton Bombs";
    const item3Img = new Image();
    item3Img.setAttribute("id", "wt-bombs");
    item3Img.src = wontonBombsImg;
    item3Img.alt = "Won Ton Bombs";
    item3Img.addEventListener("click", () => {
        menu();
    });
    foodItem3.appendChild(item3Img);
    foodItem3.appendChild(item3P);
    chefsDiv.appendChild(foodItem3);

    chefsRecommendation.append(chefsDiv);
    content.append(chefsRecommendation);
}
