import { getFirestore, collection, getDocs , getDoc, doc,where,query,deleteDoc,limit} from "firebase/firestore";
import app from "../../../core/init/firebase_init.js";

export class PanelLoginServices{
    firestore = getFirestore(app);
    async getCodes(){
       try{
         const col = await collection(this.firestore,'access_codes');
         const docs = await getDocs(col);
         let response=[];
         docs.forEach((doc) => {
           response.push(doc.data());
         });
         return response;
       }
       catch(error){
         console.log("You have an error in get access codes\nThis is your error: ",error);
       }
     }
}