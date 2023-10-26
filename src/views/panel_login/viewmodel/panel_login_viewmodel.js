import {PanelLoginServices} from "../services/panel_login_services.js";

export class PanelLoginViewModel{
    services = new PanelLoginServices();

    async tryToLogin(value){
        const response = await this.services.getCodes();
        let isTrue=false;
       for(let i=0;i<=response[0]["codes"].length-1;i++){
        if(value==response[0]["codes"][i]){
           isTrue=true;
        }
       }
       if(isTrue){
        window.location.href="/silam-emlak-admin.html";
        localStorage.setItem("logged",new Date().getDay());
       }
       else{
        alert("Erişim kodu yanlış");
       }
    }
}