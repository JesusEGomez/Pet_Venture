
import styles from './landing.module.css'
import {NextPage} from "next"
import  Link  from 'next/link'

const landing: NextPage = () => {
  return (
    <div className={styles.container}>
    <div>
        <div className={styles.texto}>
            <h1 className={styles.titulo}>Bienvenido a Pet Venture</h1>
            <p className={styles.descripcion}>Tu sitio de adopcion y compra de productos</p>
          <Link href="/">
            <button className={styles.button}>Más información</button>
        </Link>
        <video autoPlay loop muted className={styles.video}>
             <source src="/assets/prueba.mp4" type="video/mp4"/>
        </video>
        </div>
    </div>
</div>
)
}

export default landing;
