import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { db } from "@/firebaseConfig"
import { Furnizor } from "@/models/models"
import { Trash } from "lucide-react"
import { doc, deleteDoc } from "firebase/firestore";

interface Props {
  furnizor: Furnizor,
  readData: () => {}
}


export default function DeleteFurnizorDialog({ furnizor, readData }: Props) {

  async function deleteFurnizor() {
    await deleteDoc(doc(db, "furnizori", furnizor.id))
  }

  return <Dialog>
    <DialogTrigger className="flex flex-col items-center justify-center "  >
      <Trash className="text-destructive align-middle " />
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adauga furnizor nou</DialogTitle>
        <DialogDescription>
          Vei sterge furnizorul <em>{furnizor.name}</em>
        </DialogDescription>
        <DialogClose asChild>
          <Button onClick={() => {
            deleteFurnizor()
            readData()
          }} >Confirma</Button>
        </DialogClose>
      </DialogHeader>
    </DialogContent>
  </Dialog>
}
