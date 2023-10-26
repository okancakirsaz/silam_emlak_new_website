import "./message_widget.css"
import {PanelServices} from "../../services/panel_services.js";

export class MessageWidget{
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
        const number =document.createElement("div");
        number.classList.add("numberContainer");
        number.innerHTML=this.data["phoneNumber"];
        const name =document.createElement("div");
        name.classList.add("nameContainer");
        name.innerHTML=this.data["name"];
        const mail =document.createElement("div");
        mail.classList.add("mailContainer");
        mail.innerHTML=this.data["mail"];
        const deleteButton =document.createElement("div");
        deleteButton.classList.add("deleteButton");
        deleteButton.innerHTML="SİL";
        deleteButton.addEventListener("click",async(e)=>{
            await this.services.delete(this.data["id"],"contacts")
            location.reload();
        });
        container.appendChild(desc);
        container.appendChild(number);
        container.appendChild(name);
        container.appendChild(mail);
        container.appendChild(deleteButton);
        document.getElementById(this.parentId).appendChild(container);
    }
}