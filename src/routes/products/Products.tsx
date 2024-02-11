import Heading from "@/components/Heading";
import { SkeletonCard } from "@/components/SkeletonTable";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { db } from "@/firebaseConfig";
import { Product } from "@/models/models";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { Pen, Trash } from "lucide-react";
import { useEffect, useState } from "react";

export default function Products() {

  const [products, setProducts] = useState<Product[]>([])

  async function addData() {
    const p: Product = {
      producerName: "2121",
      internalName: "caserola"
    }
    try {
      const docRef = await addDoc(collection(db, "produse"), p)

      console.log("Document written with ID: ", docRef.id);
    } catch (error) {

      console.error("Error adding document: ", error);
    }
  }

  async function readData() {
    const dataArray: Product[] = []
    const snapshot = await getDocs(collection(db, "produse"))
    snapshot.forEach(doc => {
      const p: Product = {
        id: doc.id,
        producerName: doc.data().producerName,
        internalName: doc.data().internalName
      }
      dataArray.push(p)
    })
    setProducts(dataArray)
  }

  useEffect(() => {
    readData()
  }, [])

  return <div>
    <Heading text="Produse" />
    <Button onClick={addData} >Add data</Button>

    {products.length === 0 ?
      <SkeletonCard />
      :
      <Table>
        <TableCaption>Lista furnizori</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Numar</TableHead>
            <TableHead>Denumire Interna</TableHead>
            <TableHead>Denumire Producator</TableHead>
            <TableHead className="text-center" >Modifica</TableHead>
            <TableHead className="text-center" >Sterge</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((p, index) =>
          (<TableRow key={p.id} >
            <TableCell>{index + 1}</TableCell>
            <TableCell className="font-medium">{p.internalName}</TableCell>
            <TableCell className="font-medium">{p.producerName}</TableCell>
            <TableCell align="center" >
              <Pen />
            </TableCell>
            <TableCell align="center" >
              <Trash />
            </TableCell>
          </TableRow>))}
        </TableBody>
      </Table>
    }
  </div>
}
