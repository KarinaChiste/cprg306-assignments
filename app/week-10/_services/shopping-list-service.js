import { db } from "../../utils/firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";


export const getItems = async (userId) =>{

  const query = await getDocs(collection(db, "users", userId, "items"));
  return query.docs.map((doc) => ({
    id: doc.id,
  name: doc.data()?.name || "",       
  category: doc.data()?.category || "",
  }));
};

export const addItem = async (userId, item) => {
  // alert(item);
  const ref = await addDoc(collection(db,"users", userId, "items"), item);
  return ref.id;
};