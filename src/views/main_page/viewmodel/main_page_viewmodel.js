import { ArticleMockServices } from "../../../core/services/mock_services/articles_mock_services";
import { ArticleWidget } from "../../../core/widgets/article_widget/article_widget";

export class MainPageViewModel{
    articleService = new ArticleMockServices();

    fetchArticles(){
        const response= this.articleService.getAllArticles();
        for(let i=0;i<=response.length-1;i++){
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