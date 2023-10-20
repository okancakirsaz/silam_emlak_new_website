import { ArticleWidget } from "../../../core/widgets/article_widget/article_widget";
import { MainPageServices } from "../services/main_page_services.js";
export class MainPageViewModel{
    service = new MainPageServices() ;

    async fetchArticles(){
        const response= await this.service.getArticles();
        localStorage.setItem("articles",JSON.stringify(response));
        for(let i=0;i<=9;i++){
            new ArticleWidget(response[i],"articlesBody");
        }
    }

    rotateHouses(){
       const houseOne= document.getElementById("houseOne");
       const houseTwo= document.getElementById("houseTwo");
       window.addEventListener("scroll",(e)=>{
        e.preventDefault();
        const scrollAmount = window.scrollY;
        const rotation = scrollAmount * 0.1;
        houseOne.style.transform=`rotate3d(0, 1, 0, ${rotation}deg)`;
        houseTwo.style.transform=`rotate3d(0, 1, 0, ${rotation}deg)`;        
       });
    }
}