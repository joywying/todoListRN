import { getDatabase, ref, set, get, child } from "firebase/database";
import app from "./firebaseConfig.js"

const masterId = "masterUID"
const taskPath = masterId + "/tasks"

export async function getTasks() {
    try {
        const dbRef = ref(getDatabase(app));
        const snapshot = await get(child(dbRef, taskPath))

        if (snapshot.exists()) {
            console.log("Retrieved tasks: " + snapshot.val());
            return snapshot.val()
        } else {
            console.log("No data available");
            return []
        }
    } catch (e) {
        console.error("There was an error when reading from database: " + e)
    }
}

export async function setTasks(newTasks) {
   try{
    console.log('Setting tasks to: ' + newTasks)
        const db = getDatabase(app)
        await set(ref(db, masterId), {
            tasks: newTasks
        });
   } catch (e) {
        console.error("There was an error when writing to database: " + e)
   }
}

