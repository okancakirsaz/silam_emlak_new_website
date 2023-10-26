import { getFirestore, collection, getDocs , getDoc, doc,where,query,deleteDoc,limit,setDoc} from "firebase/firestore";
import app from "../../../core/init/firebase_init.js";
import {getStorage,ref,put, uploadBytesResumable, getBytes, getDownloadURL, deleteObject, listAll} from "firebase/storage";

export class PanelServices{
  defaultStorage =getStorage(app);
  firestore = getFirestore(app);
    async delete(id,colName){ 
        await deleteDoc(doc(collection(this.firestore,colName),id));
      }

     async get(colName){
      try{
        const col = await collection(this.firestore,colName);
        const docs = await getDocs(col);
        let response=[];
        docs.forEach((doc) => {
          response.push(doc.data());
        });
        return response;
      }
      catch(error){
        console.log("You have an error in get in panel\nThis is your error: ",error);
      }
    }
    async setArticle(data){
      try{
         for(let i=0;i<=data["images"].length-1;i++){
       const storageRef= ref(this.defaultStorage, data["images"][i].name);
       await uploadBytesResumable(storageRef,data["images"][i]);
       data["images"][i]=await getDownloadURL(storageRef);
         }
         const col= collection(this.firestore,"gigs");
         await setDoc(doc(col,data["id"]),data);
      }
      catch(error){
         console.log("You have an error in write article data\nThis is your error: ",error);
      }
     }
}