import "./app_bar.css";
import { AppBarScrollListener } from "./app_bar_scroll_listener";
export class AppBar{
    constructor(){
        this.buildMenu();
        this.build();
        new AppBarScrollListener();
    }
    menuDisplay="none";

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
    location.href="/konumumuz.html";
    parcel.innerHTML="Ada Parsel Sorgulama";
    parcel.href="https://parselsorgu.tkgm.gov.tr/";
    parcel.target="_blank";
    property.innerHTML="Gayrimenkul Danışmanlık";
    property.href="gayrimenkul-danismanlik.html";
    aboutUs.innerHTML="İlanlar";
    aboutUs.href="ilanlar.html";
    const menu = document.createElement("img");
    menu.id="hamburger-menu";
    menu.src=menuImage;
    
    menu.addEventListener("click",(event)=>{
        event.preventDefault();
        const menuElement = document.getElementById("menu");
        if(this.menuDisplay=="flex"){
            this.menuDisplay="none";         
        }
        else{
            menuElement.style.animation="menuOpenAnimation 2s linear forward";
            console.log(menuElement.style.animation)
            this.menuDisplay="flex";   
        }
        menuElement.style.display=this.menuDisplay;  
    });

    rightElements.appendChild(location);
    rightElements.appendChild(parcel);

    rightElements.appendChild(property);
    rightElements.appendChild(aboutUs);

    rightElements.appendChild(menu);
    mainContainer.appendChild(logo);
    mainContainer.appendChild(rightElements);

    document.body.insertBefore(mainContainer,document.body.firstChild);
    }

   buildMenu(){
    const parent = document.createElement("div");
    parent.id="menu";

    const popButton = document.createElement("img");
    popButton.id="popButton";
    popButton.src="https://www.svgrepo.com/show/247769/left-arrow-back.svg";
    popButton.addEventListener("click",(e)=>{
        this.menuDisplay="none";
        parent.style.display=this.menuDisplay;
    });

    const title = document.createElement("div");
    title.id="menuTitle";
    title.innerHTML="MENU";

    const popUpAndTitleSheet = document.createElement("div");
    popUpAndTitleSheet.id="popUpAndTitleSheet";
    parent.style.display=this.menuDisplay;
    popUpAndTitleSheet.appendChild(popButton);
    popUpAndTitleSheet.appendChild(title);

    const ourLocation = document.createElement("a");
    ourLocation.classList.add("menuElement");
    ourLocation.innerHTML="Konumumuz";
    ourLocation.href="/konumumuz.html";

    const parcel = document.createElement("a");
    parcel.classList.add("menuElement");
    parcel.innerHTML="Ada Parsel Sorgulama";
    parcel.href="https://parselsorgu.tkgm.gov.tr/";
    parcel.target="_blank";

    const consulment = document.createElement("a");
    consulment.classList.add("menuElement");
    consulment.innerHTML="Gayrimenkul Danışmanlık";
    consulment.href="/gayrimenkul-danismanlik.html";

    const aboutUs = document.createElement("a");
    aboutUs.classList.add("menuElement");
    aboutUs.innerHTML="Hakkımızda";
    aboutUs.href="/hakkimizda.html";

    const contact = document.createElement("a");
    contact.classList.add("menuElement");
    contact.innerHTML="İletişim";
    contact.href="/iletisim.html";

    const calculator = document.createElement("a");
    calculator.classList.add("menuElement");
    calculator.innerHTML="Mülk Değeri Hesaplama";

    const articles = document.createElement("a");
    articles.classList.add("menuElement");
    articles.innerHTML="İlanlar";
    articles.href="/ilanlar.html";
    
    parent.appendChild(popUpAndTitleSheet);
    parent.appendChild(ourLocation);
    parent.appendChild(parcel);
    parent.appendChild(consulment);
    parent.appendChild(aboutUs);
    parent.appendChild(contact);
    parent.appendChild(calculator);
    parent.appendChild(articles);

    document.body.insertBefore(parent,document.body.firstChild);

   }
}