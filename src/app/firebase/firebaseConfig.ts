
import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import dataBase from "../utils/db.json"

const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app,);


interface Products{
    id: number,
    descripcion: string,
    tamaño: string,
    nombre: string,
    precio: number,
    marca: string,
    categoria: string
}
const producto:Products ={
    id: 2,
    descripcion: "Juguete interactivo para gatos con plumas",
    tamaño: "Pequeño",
    nombre: "Varita de Plumas",
    precio: 9.99,
    marca: "PurrfectPlay",
    categoria: "Juguetes"
}



export default db

