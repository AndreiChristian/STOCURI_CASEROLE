import AuthWrapper from "@/auth/AuthWrapper"
import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { auth } from "@/firebaseConfig"
import { signOut } from "firebase/auth"
import { NavLink, Outlet } from "react-router-dom"

const links = [
  {
    text: "Produse",
    href: "/produse"
  },
  {
    text: "Furnizori",
    href: "/furnizori"
  },
  {
    text: "Settings",
    href: "/settings"
  },
]

export function Root() {

  function signUserOut() {
    signOut(auth).then(() => (console.log("Signed out")))
      .catch((err) => console.log(err))
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AuthWrapper>
        <div className="flex h-screen overflow-hidden bg-background text-foreground">
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex flex-col w-64">
              <div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-card border-r border-border ">
                <div className="flex flex-col flex-shrink-0 px-4">
                  <a className="text-lg font-semibold tracking-tighter focus:outline-none focus:ring " href="/">
                    <span className="inline-flex items-center gap-2">
                      Stocuri caserole
                    </span>
                  </a>
                </div>
                <div className="flex flex-col flex-grow px-4 mt-5">
                  <nav className="flex-1 space-y-1 bg-background">
                    <ul>
                      {links.map((link, index) => (
                        <li key={index}>
                          <NavLink
                            className={({ isActive }) => `inline-flex items-center w-full px-4 py-2 mt-1 text-sm transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline 
                      hover:bg-foreground hover:scale-95 hover:text-primary ${isActive ? "bg-muted text" : ""} `}
                            to={link.href}>
                            {link.text}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="self-center " >
                    <ModeToggle />
                  </div>
                  <div className="self-center py-5 " >
                    <Button variant={"ghost"} onClick={signUserOut} >Logout</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 w-0 overflow-hidden">
            <main className=" relative flex-1 overflow-y-auto focus:outline-none">
              <div className="py-6 px-4 mx-auto 2xl:max-w-7xl sm:px-6 md:px-8 ">
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </AuthWrapper>
    </ThemeProvider>
  )
}
