import { BottomBar } from '../../core/widgets/bottom_bar/bottom_bar';
import { TextArea } from '../../core/widgets/text_area/text_area';
import { TextInput } from '../../core/widgets/text_input/text_input';
import { Button } from '../../core/widgets/button/button.js';
import { ContactViewModel } from './viewmodel/contact_viewmodel';
try{
const viewModel = new ContactViewModel();
const nameInput = new TextInput("nameInput","220px","30px");
const numberInput = new TextInput("numberInput","220px","30px");
const mailInput = new TextInput("mailInput","220px","30px");
const descriptionInput = new TextArea("descriptionInput","220px","140px");
new Button("button",async ()=>{
await viewModel.fetchMessageData(nameInput.value,numberInput.value,mailInput.value,descriptionInput.value); 
},"100px","30px","Gönder");
new BottomBar();
}
catch(_){
console.log("you have an error in contact page:\n"+_);
}