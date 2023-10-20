import { MainPageViewModel } from "./viewmodel/main_page_viewmodel";
import { AppBar } from '../../core/widgets/app_bar/app_bar';
import { BottomBar } from '../../core/widgets/bottom_bar/bottom_bar';
try{
new AppBar();
const viewModel=new MainPageViewModel();
await viewModel.fetchArticles();
viewModel.rotateHouses();
new BottomBar();
}
catch(_){

}