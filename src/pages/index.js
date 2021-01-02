// Components
import Home from "components/home"
import NotLogged from "components/auth/notLogged"

const logged = false;

export default function HomeView() {

  return logged ? <Home/> : <NotLogged />

}
