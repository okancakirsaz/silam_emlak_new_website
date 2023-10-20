import "./app_bar.css";
import { AppBarScrollListener } from "./app_bar_scroll_listener";
export class AppBar{
    constructor(){
        this.build();
        new AppBarScrollListener();
    }


    build(){
    const logoImage = document.getElementById("logoImage").src;
    const menuImage = document.getElementById("menuImage").src;

    const mainContainer = document.createElement("div");
    mainContainer.id="app-bar";
    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src=logoImage;
    const rightElements = document.createElement("div");
    rightElements.id="right-elements";
    const location = document.createElement("a");
    const parcel = document.createElement("a");
    const property = document.createElement("a");
    const aboutUs = document.createElement("a");
    location.classList.add("app-bar-element");
    parcel.classList.add("app-bar-element");
    property.classList.add("app-bar-element");
    aboutUs.classList.add("app-bar-element");
    location.innerHTML="Konumumuz";
    parcel.innerHTML="Ada Parsel Sorgulama";
    parcel.href="https://parselsorgu.tkgm.gov.tr/";
    parcel.target="_blank";
    property.innerHTML="Gayrimenkul Danışmanlık";
    aboutUs.innerHTML="Hakkımızda"
    const menu = document.createElement("img");
    menu.id="hamburger-menu";
    menu.src=menuImage;


    rightElements.appendChild(location);
    rightElements.appendChild(parcel);

    rightElements.appendChild(property);
    rightElements.appendChild(aboutUs);

    rightElements.appendChild(menu);
    mainContainer.appendChild(logo);
    mainContainer.appendChild(rightElements);

    document.body.insertBefore(mainContainer,document.body.firstChild);

    }
}