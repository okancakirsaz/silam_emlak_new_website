import { getFirestore, collection, getDocs , getDoc, doc,setDoc, updateDoc} from "firebase/firestore";
import app from "../../../core/init/firebase_init.js"
export class ContactServices{
    firestore = getFirestore(app);

    async setMessage(data){
        try{
           const col= collection(this.firestore,"contacts");
           await setDoc(doc(col,data["id"]),data);
        }
        catch(error){
           console.log("You have an error in write message data\nThis is your error: ",error);
        }
      }
}