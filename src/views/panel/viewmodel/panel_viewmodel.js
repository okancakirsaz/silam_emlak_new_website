import { PanelServices } from "../services/panel_services";
import { MessageWidget } from "../views/message_widget/message_widget";
import { ArticleForDelete } from "../views/article_for_delete/article_for_delete.js";
import { AppConsts } from "../../../core/consts/app_consts.js";
import { SelectOption } from "../../../core/widgets/select_option/select_option.js";
const uuid = require("uuid");
export class PanelViewModel{

    services = new PanelServices();
    imageList=[];

    checkIsLogged(){
        if(localStorage.getItem("logged")!=null){
            return true;
        }
        else{
            return false;
        }
    }

    navigateToLogin(){
        alert("Önce giriş yapmalısınız");
        window.location.href="/panel.html";
    }

   async getMessages(){
    const response = await this.services.get("contacts");
    for(let i=0;i<=response.length-1;i++){
        new MessageWidget("messages",response[i]);
    }
    }

    fetchProvinceDatas(){
        const provinces = new AppConsts().neightborhoods;
        for(let i=0;i<=provinces.length-1;i++){
            new SelectOption("province",provinces[i]);
        }
    }
    async getArticles(){
        const response = await this.services.get("gigs");
        for(let i=0;i<=response.length-1;i++){
            new ArticleForDelete("articlesForDelete",response[i]);
        }
    }
    imageInputListener(){
        document.getElementById("filePicker").addEventListener("change",(e)=>{
            const files = e.target.files;
            for (let i = 0; i <= files.length-1; i++) {
              this.imageList.push(files[i]);
            }
        });
    }

    getInputValues(age,brut,net,cost,currentFloor,floorCount,fuel,description){
        return {
            "neightborhood":document.getElementById("province").value,
            "state":document.getElementById("state").value,
            "type":document.getElementById("type").value,
            "age":age.value,
            "brut":brut.value,
            "net":net.value,
            "cost":cost.value,
            "currentFloor":currentFloor.value,
            "floor":floorCount.value,
            "fuel":fuel.value,
            "isHaveFurniture":document.getElementById("isHaveFurniture").value,
            "description":description.value,
            "images":this.imageList,
            "city":"Afyonkarahisar",
            "id":uuid.v4()
        }
    }
    async setArticles(age,brut,net,cost,currentFloor,floorCount,fuel,description){
        try {
         const request = this.getInputValues(age,brut,net,cost,currentFloor,floorCount,fuel,description);
         await this.services.setArticle(request); 
        } catch (error) {
            console.log(error);
        }
    }
}