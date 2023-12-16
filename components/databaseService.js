import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNqW8mACA1xGNPbTAhvNK1sU_B2zyZIJI",
  authDomain: "cmr-cleaning-service.firebaseapp.com",
  projectId: "cmr-cleaning-service",
  storageBucket: "cmr-cleaning-service.appspot.com",
  messagingSenderId: "405722210181",
  appId: "1:405722210181:web:39277af30dcb885c0eeeec",
  measurementId: "G-P69BYR1CBR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize database
const db = ref(getDatabase(app));
export async function getServices() {
  return get(child(db, "services"))
    .then((snapshot) => {
      if (snapshot.exists()) {
        //alert(JSON.stringify(snapshot.val()));
        return snapshot.val();
      } else {
        console.log("No data availab");
        return null; // Adjust as needed
      }
    })
    .catch((error) => {
      console.error("Error fetching data from Firebase:", error);
      throw error;
    });
  /* const db = app.database();
  try {
    const dataRef = db.ref(
      "https://cmr-cleaning-service-default-rtdb.firebaseio.com/"
    );
    const snapshot = await dataRef.once("value");
    const data = snapshot.val();
    alert(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  } */
  /*  try {
    const response = await get(child(db, "services")).then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
      } else {
        alert("No data available");
        console.log("No data available");
      }
    });
  } catch (err) {
    console.log(err);
  } */
}
