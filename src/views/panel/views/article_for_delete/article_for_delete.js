import "./article_for_delete.css"
import {PanelServices} from "../../services/panel_services.js";

export class ArticleForDelete{
    constructor(parentId,data){
        this.parentId=parentId;
        this.data=data;
        this.build();
    }
    services = new PanelServices();

    build(){
        const container = document.createElement("div");
        container.classList.add("messageContainer");
        const desc =document.createElement("div");
        desc.innerHTML=this.data["description"];
        desc.classList.add("descriptionContainer");
        const deleteButton =document.createElement("div");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML="SİL";
        deleteButton.addEventListener("click",async(e)=>{
            await this.services.delete(this.data["id"],"gigs")
            location.reload();
        });
        container.appendChild(desc);
        container.appendChild(deleteButton);
        document.getElementById(this.parentId).appendChild(container);
    }
}