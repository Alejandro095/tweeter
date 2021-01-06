// Components
import Home from "@views/home"
import NotLogged from "@views/auth-not-logged"

const logged = true;

export default function HomeView() {

  return logged ? <Home/> : <NotLogged />

}
