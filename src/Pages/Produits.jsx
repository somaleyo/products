import { useEffect, useState } from 'react'
import Nav from '../components/Nav'
import Caroussel from '../components/Caroussel'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import './produit.css'

export default function Produit(props) {

const[data,setData]=useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)
       useEffect(() => {
            fetch("https://fakestoreapi.com/products/")
                .then(response => response.json())
                .then((products) => {
                    setData(products)
                    setLoading(false)
                })
                .catch((error) => {
                    setError(error.message)
                    setLoading(false)
                })
        }, [])

          if (loading) return <div className="text-center p-4">Chargement...</div>
        if (error) return <div className="text-center p-4 text-red-500">Erreur: {error}</div>
    return (
        <>
        <Nav/>
     
          <h2 className="text-center p-4 ">Nos produits</h2>
          <div className="card-container ">
            
          
            {data
            
            .map((produit)=>(
                <div className='card shadow-lg' key={produit.id}>
                    <img src={produit.image} className="card-image" alt="" />
                    <div className="card-text">
                     <h3 className='card-titre'>{produit.title} </h3>
                    <h5 className='card-category'>{produit.category} </h5>
                    <h6 className='prix'>${produit.price} </h6>
                     <div className="avis">
                    <h6><span className='note'>{produit.rating.rate}</span> /5 </h6> 
                    <h6 className='return'>({produit.rating.count} notes) </h6> 
                     </div>
                    
                    <Link to={`/detail/${produit.id}`} className="link btn ">Voir plus</Link>
                    </div>
              
                </div>
                

            ))}
            </div>
               <Footer/>
          
        </>
    )
}