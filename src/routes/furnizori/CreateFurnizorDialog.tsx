
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

interface Props {
  createData: () => void,
  readData: () => void,
  setFurnizorNou: (arg: any) => void,
  furnizorNou: string
}

export default function CreateFurnizorDialog({ createData, readData, setFurnizorNou, furnizorNou }: Props) {
  return <Dialog>
    <DialogTrigger className="mb-10 " asChild  >
      <Button>Adauga furnizor nou</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Adauga furnizor nou</DialogTitle>
        <div className="flex flex-col gap-5 my-10">
          <Input placeholder="Nume furnizor" value={furnizorNou} onChange={e => setFurnizorNou(e.target.value)} />
          <DialogClose asChild>
            <Button disabled={!furnizorNou} onClick={() => {
              createData()
              readData()
            }} >Adauga</Button>
          </DialogClose>
        </div>
      </DialogHeader>
    </DialogContent>
  </Dialog>
}

