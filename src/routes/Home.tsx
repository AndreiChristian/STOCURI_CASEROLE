import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";

function NavCard({ name, href }: { name: string, href: string }) {
  return (
    <Link to={href} >
      <Card>
        <CardHeader />
        <CardContent>
          {name}
        </CardContent>
        <CardFooter />
      </Card>
    </Link>
  )
}

const cardLinks: { name: string, href: string }[] = [
  {
    name: "Furnizori",
    href: "/furnizori"
  },
  {
    name: "Produse",
    href: "/produse"
  }
]


export default function Home() {
  return <div className="flex items-center flex-wrap justify-evenly" >
    {
      cardLinks.map(c => <NavCard name={c.name} href={c.href} />)
    }
  </div>
}
