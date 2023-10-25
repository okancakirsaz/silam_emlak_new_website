import { OpenedArticleViewModel } from "./viewmodel/opened_article_viewmodel";
import { AppBar } from '../../core/widgets/app_bar/app_bar';
import { BottomBar } from '../../core/widgets/bottom_bar/bottom_bar';

new AppBar();
const viewModel = new OpenedArticleViewModel();
viewModel.fetchPage();
viewModel.navigateImg();
new BottomBar();
