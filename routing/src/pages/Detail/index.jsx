import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios'

const Detail = () => {
    let { id } = useParams();
    const [product, setProduct] = useState([])

    async function getfetch() {
        const Response= await axios.get(`https://northwind.vercel.app/api/products/`+id)
        setProduct(Response.data)
    }
    useEffect(() => {
        getfetch()
    }, [])
    
  return (
    <div>
         <ul key={product.id} style={{border:"1px solid black"}}>
                    <li>{product.id}</li>
                    <li>{product.quantityPerUnit}</li>
                    <li>{product.name}</li>
                </ul>
    </div>
  )
}

export default Detail