export class SelectOption{
    constructor(parent,value){
        this.parent=parent;
        this.value=value;
        this.build();
    }
    build(){
        const option= document.createElement("option");
        option.value=this.value;
        option.innerHTML=this.value;
        document.getElementById(this.parent).appendChild(option);
    }
}