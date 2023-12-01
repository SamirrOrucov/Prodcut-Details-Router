import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'

import axios from 'axios'
const Cards = () => {
    const [products, setProducts] = useState([])
    async function getfetch() {
        const Response= await axios.get("https://northwind.vercel.app/api/products")
        setProducts(Response.data)
    }
    useEffect(() => {
        getfetch()
    }, [])
    
  return (
    <>
    <div className="cards">
        {
            products.map(item=>
                <ul key={item.id} style={{border:"1px solid black"}}>
                    <li>{item.id}</li>
                    <li>{item.quantityPerUnit}</li>
                    <li>{item.name}</li>
                    <NavLink to={"/detail/"+item.id}>Go Detail</NavLink>

                </ul>
                )
        }
    </div>
    
    </>
  )
}

export default Cards