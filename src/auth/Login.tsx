import { ThemeProvider } from "@/components/theme-provider"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { auth } from "@/firebaseConfig"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Login() {

  const navigate = useNavigate()

  async function signUserIn() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, "andreichristiannetoiu@gmail.com", "andreicod9!A")
      const user = userCredential.user
      navigate("/")
      console.log(user)
    } catch (error) {
      console.table(error)
    }
  }

  return <ThemeProvider>
    <div className="w-screen h-screen bg-background flex items-center justify-center gap-5 flex-col " >

      <Input className="w-1/2" />
      <Button className="w-1/2" onClick={() => {
        signUserIn()
      }} >Inregsitreaza-te</Button>
    </div>
  </ThemeProvider>
}
