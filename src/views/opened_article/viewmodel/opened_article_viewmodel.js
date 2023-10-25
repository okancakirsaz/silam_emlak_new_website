export class OpenedArticleViewModel{
    articleDatas
    imageIndex=0;
    getCurrentArticleData(){
        const dataSet = JSON.parse(localStorage.getItem("articles"));
        for(let i=0;i<=dataSet.length-1;i++){
            if(dataSet[i]["id"]== new URLSearchParams(window.location.search).get("data")){
                this.articleDatas=dataSet[i];
            }
        }
    }

    fetchPage(){
        this.getCurrentArticleData();
        const imgContainer = document.getElementById("image");
        imgContainer.src=this.articleDatas["images"][this.imageIndex];
        const province = document.getElementById("province");
        province.innerHTML=this.articleDatas["neightborhood"];
        const state = document.getElementById("state");
        state.innerHTML=this.articleDatas["state"];
        const type = document.getElementById("type");
        type.innerHTML=this.articleDatas["type"];
        const currentFloor = document.getElementById("currentFloor");
        currentFloor.innerHTML=this.articleDatas["currentFloor"];
        const floor = document.getElementById("floor");
        floor.innerHTML=this.articleDatas["floor"];
        const fuel = document.getElementById("fuel");
        fuel.innerHTML=this.articleDatas["fuel"];
        const age = document.getElementById("age");
        age.innerHTML=this.articleDatas["age"];
        const area = document.getElementById("area");
        area.innerHTML=this.articleDatas["net"]+"/"+this.articleDatas["brut"];
        const isHaveFurniture = document.getElementById("isHaveFurniture");
        isHaveFurniture.innerHTML=this.articleDatas["isHaveFurniture"];
        const price = document.getElementById("price");
        price.innerHTML=this.articleDatas["cost"];
        const desc = document.getElementById("desc");
        desc.innerHTML=this.articleDatas["description"];
        
    }

    navigateImg(){
        const imgContainer = document.getElementById("image");
        document.getElementById("back").addEventListener("click",(e)=>{
            if(this.imageIndex!=0){
                console.log("sa");
            this.imageIndex=this.imageIndex-1;
            imgContainer.src=this.articleDatas["images"][this.imageIndex];
            }
        });
        document.getElementById("front").addEventListener("click",(e)=>{
            if(this.imageIndex<this.articleDatas["images"].length-1){
            this.imageIndex=this.imageIndex+1;
            imgContainer.src=this.articleDatas["images"][this.imageIndex];
            }
        });
    }
}