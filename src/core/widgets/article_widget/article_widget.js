import "./article_widget.css";

export class ArticleWidget{
    constructor(widgetData, parentId){
        this.parentId=parentId;
        this.widgetData=widgetData;
        this.build();
    }
 build(){
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("articleElement");
    const caller = document.createElement("a");
    caller.classList.add("caller");
    caller.href="/ilan.html?data="+this.widgetData["id"];
    const upperContainer = document.createElement("div");
    upperContainer.classList.add("upper-container");
    const bottomContainer = document.createElement("div");
    bottomContainer.classList.add("bottom-container");
    const type = document.createElement("div");
    type.innerHTML=this.widgetData["state"];
    type.classList.add("type");
    const isHaveFurniture = document.createElement("div");
    isHaveFurniture.classList.add("is-have-furniture");
    isHaveFurniture.innerHTML=this.widgetData["isHaveFurniture"]=="Hayır"?"Eşyasız":"Eşyalı";
    const image = document.createElement("img");
    image.classList.add("article-image");
    image.src=this.widgetData["images"][0];
    const neightborhood = document.createElement("div");
    neightborhood.classList.add("neightborhood");
    neightborhood.innerHTML=this.widgetData["neightborhood"];
    const price = document.createElement("div");
    price.classList.add("price");
    price.innerHTML=this.widgetData["cost"];
    const seeDetails = document.createElement("a");
    seeDetails.href=this.widgetData["id"];
    seeDetails.classList.add("see-details");

    upperContainer.appendChild(type);
    upperContainer.appendChild(isHaveFurniture);
    upperContainer.appendChild(image);
    bottomContainer.appendChild(neightborhood);
    bottomContainer.appendChild(price);
    bottomContainer.appendChild(seeDetails);
    mainContainer.appendChild(upperContainer);
    mainContainer.appendChild(bottomContainer);  
    caller.appendChild(mainContainer);
    document.getElementById(this.parentId).appendChild(caller);
 }

} 