import { ContactServices } from "../services/contact_services";

export class ContactViewModel{
    services = new ContactServices();

    async fetchMessageData(nameValue,numberValue,mailValue,descriptionValue){
       const request = {
            "name":nameValue,
            "phoneNumber": numberValue,
            "mail":mailValue,
            "description":descriptionValue,
            "id": new Date().toISOString(),
        };
        if(request["name"]!=null&&request["phoneNumber"]!=null&&request["mail"]!=null&&request["name"]!=""&&request["phoneNumber"]!=""&&request["mail"]!=""){
            await this.services.setMessage(request);
        }
        else{
            await this.showErrorToast();

        }
    }

    async showErrorToast(){
        document.getElementById("errorToast").style.display="flex";
        await new Promise(resolve => setTimeout(resolve, 3000))
        .then(() => { document.getElementById("errorToast").style.display="none";});        
    }


}