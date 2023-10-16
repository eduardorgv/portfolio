import { AboutMe } from "../sections/AboutMe"
import { Home } from "../sections/Home"
import { Header } from "./Header"

export const AppLayout = () => {
  return (
    <div className="mx-4 sm:mx-10 md:mx-20 lg:mx-40 space-y-[8rem]">
      <Header />
      <Home />
      <AboutMe />
    </div>
  )
}
