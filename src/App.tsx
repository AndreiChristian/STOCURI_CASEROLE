import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { useEffect, useState } from "react";
import { Button } from "./components/ui/button";


interface User {
  id: string;
  first: string;
  last: string;
  born: number; // Assuming 'born' is a year and can be represented as a number
}

function App() {
  const [data, setData] = useState<User[]>([]); // Use the User interface


  async function addData() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Ada",
        last: "Lovelace",
        born: 1815
      });
      console.log("Document written with ID: ", docRef.id);
      // Optionally, consider refreshing your data here if needed
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  async function readData() {
    const dataArray: User[] = []; // Use the User interface
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      const docData = doc.data();
      // Cast the document to User interface, including the id
      const userData: User = {
        id: doc.id,
        first: docData.first,
        last: docData.last,
        born: docData.born,
      };
      dataArray.push(userData);
    });
    setData(dataArray);
  }

  useEffect(() => {
    readData();
  }, []);

  return (
    <div className="bg-primary text-secondary" >
      <h1 className=" text-3xl font-bold underline">
        Hello world!
      </h1>
      <button onClick={async () => {
        await addData();
        await readData(); // Ensure readData is called after addData completes
      }}>Add data</button>
      <Button>Add data</Button>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.first} {item.last}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
