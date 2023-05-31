// Import the functions you need from the SDKs you need
import dataBase from "../utils/db.json"
import { initializeApp } from "firebase/app";
import { getFirestore, collection, setDoc,addDoc,doc } from "firebase/firestore";
const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MEASUREMENT_ID,
    MESSAGING_SENDER_ID,
    APP_ID,
} = process.env;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID,
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

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
export const createProducts = async () => {
    const productsCollection = collection(db, "productos");
    await addDoc(productsCollection, producto);
}


