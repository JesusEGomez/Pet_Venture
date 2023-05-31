'use client'


import { createProducts } from "../firebase/client"

export default function Prueba () {
    return(
        <div>
            <button onClick={createProducts}>Agregar producto</button>
        </div>
    )
}