import { AppBar } from '../../core/widgets/app_bar/app_bar';
import { BottomBar } from '../../core/widgets/bottom_bar/bottom_bar';
try{
new BottomBar();
}
catch(_){
console.log("you have an error in contact page:\n"+_);
}