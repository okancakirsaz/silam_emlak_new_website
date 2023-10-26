import { PanelLoginViewModel } from "./viewmodel/panel_login_viewmodel";
import { TextInput } from '../../core/widgets/text_input/text_input';
import { Button } from '../../core/widgets/button/button.js';

const viewModel = new PanelLoginViewModel();
const input= new TextInput("input","200px","30px");
new Button("btn",async()=>viewModel.tryToLogin(input.value),"100px","40px","Giriş");