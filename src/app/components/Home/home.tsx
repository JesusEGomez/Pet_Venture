import Image from 'next/image'
import styles from '../Home/home.module.css'
import {NextPage} from "next"

const Home: NextPage = () => {
  return (
  <div className={styles.main}>
    <h1>Home</h1>
  </div>
  )
}

export default Home;
