import { AppBar } from '../../core/widgets/app_bar/app_bar';
import { Button } from '../../core/widgets/button/button';
import { BottomBar } from '../../core/widgets/bottom_bar/bottom_bar';
import { ArticlesViewModel } from './view_model/articles_viewmodel';

new AppBar();
const viewModel = new ArticlesViewModel();
viewModel.buildArticles();
viewModel.fetchNeightborhoods();
new Button("filterContainer",()=>viewModel.filterDatas(),"80px","40px","ARA");
new BottomBar();