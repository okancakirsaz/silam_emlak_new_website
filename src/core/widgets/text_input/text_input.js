import "./text_input.css"

export class TextInput{
    constructor(parentId,width,height){
        this.parentId=parentId;
        this.width=width;
        this.height=height;
        this.build();
    }
    value;
    build(){
        const input = document.createElement("input");
        input.id="customInput";
        input.type="text";
        input.style.width=this.width;
        input.style.height=this.height;
        input.addEventListener("change",(e)=>{
            this.value=input.value;
        })
        document.getElementById(this.parentId).appendChild(input);
    }
}