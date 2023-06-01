'use client'



import { collection,getDocs,doc,setDoc } from "firebase/firestore";
import db from "../firebase/firebaseConfig";
import { useEffect } from "react";




export default function Prueba () {

    useEffect(()=>{
        const obtenerDatos =async()=>{
           const datos = await getDocs(collection(db,"product"))
           console.log(datos)
        } 
        obtenerDatos()
    },[])

    const handlerClick =():void=>{
        const create =async()=>{
            const cityRef = doc(db, 'cities', 'Bh');
            setDoc(cityRef, { capital: true }, { merge: true });
        }
        create()
    }
    
    return(
        <div>
            <h1>hola</h1>
            <button onClick={handlerClick}>Agregar algo</button>
        </div>
    )
}