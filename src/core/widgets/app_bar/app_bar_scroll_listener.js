export class AppBarScrollListener{
    constructor(){
        this.scrollListener();
    }

    scrollListener(){
        //TODO:Optimize here
        window.addEventListener("scroll",(e)=>{

               if(window.scrollY!=0&&window.scrollY<=299){
                document.getElementById("app-bar").style.backgroundColor="#14079e";
               }
               
               if(window.scrollY>=300&&window.scrollY<=600){
                document.getElementById("app-bar").style.animation ="appBarDiscard 2s linear forwards";
               }

               if(window.scrollY>=601){
                document.getElementById("app-bar").style.visibility="unvisible";
               }

                if(window.scrollY<=100){
                document.getElementById("app-bar").style.visibility="visible";
                document.getElementById("app-bar").style.backgroundColor="transparent";
               }
                
        });
    }
}