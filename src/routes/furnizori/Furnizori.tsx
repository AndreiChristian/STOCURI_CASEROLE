import Heading from "@/components/Heading"
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { db } from "@/firebaseConfig"
import { Furnizor } from "@/models/models"
import { addDoc, collection, getDocs } from "firebase/firestore"
import { useEffect, useState } from "react"
import DeleteFurnizorDialog from "./DeleteFurnizorDialog"
import CreateFurnizorDialog from "./CreateFurnizorDialog"
import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[50px] w-full rounded-xl" />
      <Skeleton className="h-[50px] w-full rounded-xl" />
      <Skeleton className="h-[50px] w-full rounded-xl" />
      <Skeleton className="h-[50px] w-full rounded-xl" />
      <Skeleton className="h-[50px] w-full rounded-xl" />
    </div>
  )
}

export default function Furnizori() {

  const [furnizori, setFurnizori] = useState<Furnizor[]>([])
  const [furnizorNou, setFurnizorNou] = useState("")

  async function readData() {
    const dataArray: Furnizor[] = []
    const querySnapshot = await getDocs(collection(db, "furnizori"))
    querySnapshot.forEach((doc) => {
      const f: Furnizor = {
        id: doc.id,
        name: doc.data().name
      }
      dataArray.push(f)
    })
    setFurnizori(dataArray)
  }

  async function createData() {
    try {
      const docRef = await addDoc(collection(db, "furnizori"), {
        name: furnizorNou
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  useEffect(() => {
    readData()
  }, [])

  return <section className="" >
    <Heading text="Furnizori" />
    <CreateFurnizorDialog
      createData={createData}
      readData={readData}
      setFurnizorNou={setFurnizorNou}
      furnizorNou={furnizorNou}
    />
    <br />
    {furnizori.length === 0 ?
      <SkeletonCard />
      :
      <Table>
        <TableCaption>Lista furnizori</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Numar</TableHead>
            <TableHead>Nume</TableHead>
            <TableHead className="text-center" >Modifica</TableHead>
            <TableHead className="text-center" >Sterge</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {furnizori.map((f, index) =>
          (<TableRow key={f.id} >
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">{f.name}</TableCell>
            <TableCell align="center" >
            </TableCell>
            <TableCell align="center" >
              <DeleteFurnizorDialog readData={readData} furnizor={f} />
            </TableCell>
          </TableRow>))}
        </TableBody>
      </Table>
    }
  </section >
}
