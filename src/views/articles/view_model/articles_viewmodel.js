import { ArticleWidget } from "../../../core/widgets/article_widget/article_widget.js";
import { SelectOption } from "../../../core/widgets/select_option/select_option.js";
import {AppConsts} from "../../../core/consts/app_consts.js";
import {MainPageServices} from "../../main_page/services/main_page_services.js"
export class ArticlesViewModel{
    async buildArticles(){
        const data = JSON.parse(localStorage.getItem("articles"));
        if(this.checkLocalStorage()){
            for(let i=0;i<=data.length-1;i++){
                new ArticleWidget(data[i],"articlesContainer");
            }
        }
        else{
            const response =await new MainPageServices().getArticles();
            await localStorage.setItem("articles",JSON.stringify(response));
            for(let i=0;i<=data.length-1;i++){
                new ArticleWidget(data[i],"articlesContainer");
            }
        }
    }
    checkLocalStorage(){
        if(localStorage.getItem("articles")!=null){
            return true;
        }
        else{
            return false;
        }
    }

    fetchNeightborhoods(){
        const dataSet = new AppConsts().neightborhoods;
        for(let i=0;i<=dataSet.length-1;i++){
            new SelectOption("neightborhoodSelector",dataSet[i]);
        }
    }

    filterDatas(){
        document.getElementById("articlesContainer").innerHTML="";
        const province = document.getElementById("neightborhoodSelector");
        const status = document.getElementById("sellOrRentSelection");
        const furniture = document.getElementById("furnitureSelection");
        const type = document.getElementById("typeSelection");
        const data = JSON.parse(localStorage.getItem("articles"));  

        for(let i=0;i<=data.length-1;i++){
            if ((province.value === "Hepsi" || data[i]["neightborhood"] === province.value) &&
                (status.value === "Her İkiside" || data[i]["state"] === status.value) &&
                (furniture.value === "Her İkiside" || data[i]["isHaveFurniture"] === furniture.value) &&
                (type.value === "Hepsi" || data[i]["type"] === type.value)) 
                {
                new ArticleWidget(data[i], "articlesContainer");
                }
        }
    }
}