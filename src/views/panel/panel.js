import {PanelViewModel} from "./viewmodel/panel_viewmodel.js"
import {TextInput} from "../../core/widgets/text_input/text_input.js"
const viewModel = new PanelViewModel();
if(!viewModel.checkIsLogged()){
   viewModel.navigateToLogin();
}
else{
    if(window.location.href.includes("messages")){
        await viewModel.getMessages();
    }
    if(window.location.href.includes("add-article")){
     const age= new TextInput("age","200px","40px");
     const brut= new TextInput("brut","200px","40px");
     const net= new TextInput("net","200px","40px");
     const cost= new TextInput("cost","200px","40px");
     const currentFloor= new TextInput("currentFloor","200px","40px");
     const floorCount= new TextInput("floorCount","200px","40px");
     const fuel= new TextInput("fuel","200px","40px");
     const description= new TextInput("description","200px","40px");
     viewModel.fetchProvinceDatas();
     viewModel.imageInputListener();
     document.getElementById("submitBtn").addEventListener("click",async(e)=>{
        await viewModel.setArticles(age,brut,net,cost,currentFloor,floorCount,fuel,description);
        location.reload();
    });
    }
    if(window.location.href.includes("delete-article")){
        await viewModel.getArticles();
    }
}