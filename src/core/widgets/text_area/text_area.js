import "./text_area.css"

export class TextArea{
    constructor(parentId,width,height){
        this.parentId=parentId;
        this.width=width;
        this.height=height;
        this.build();
    }
    value;
    build(){
        const input = document.createElement("textarea");
        input.id="customInput";
        input.style.width=this.width;
        input.style.maxWidth=this.width;
        input.style.height=this.height;
        input.style.maxHeight=this.height;
        input.addEventListener("change",(e)=>{
            this.value=input.value;
        })
        document.getElementById(this.parentId).appendChild(input);
    }
}