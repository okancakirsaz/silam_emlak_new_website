import { getFirestore, collection, getDocs , getDoc, doc,where,query,deleteDoc,limit} from "firebase/firestore";
import app from "../../../core/init/firebase_init.js";

export class MainPageServices{
    firestore = getFirestore(app);
    async getArticles(){
       try{
         const col = await collection(this.firestore,'gigs');
         const docs = await getDocs(col);
         let response=[];
         docs.forEach((doc) => {
           response.push(doc.data());
         });
         return response;
       }
       catch(error){
         console.log("You have an error in get gigs\nThis is your error: ",error);
       }
     }
}