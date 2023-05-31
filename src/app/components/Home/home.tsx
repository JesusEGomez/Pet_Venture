
//import styles from '../Home/home.module.css'
import {NextPage} from "next"
import NavBar from '../NavBar/navbar'

const Home: NextPage = () => {
  return (
  <div>
    <div>
      <NavBar/>
    </div>
    <h1>Por encima el NavBar "aca arrancaria el home"</h1>
  </div>
  )
}

export default Home;
