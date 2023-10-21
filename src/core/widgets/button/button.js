import "./button.css"

export class Button{
    constructor(parentId,onPressed,width,height,text){
        this.parentId=parentId;
        this.onPressed=onPressed;
        this.width=width;
        this.height=height;
        this.text=text;
        this.build();
    }
    build(){
        const input = document.createElement("input");
        input.id="customInput";
        input.type="button";
        input.value=this.text
        input.style.width=this.width;
        input.style.height=this.height;
        input.addEventListener("click",this.onPressed);
        document.getElementById(this.parentId).appendChild(input);
    }
}