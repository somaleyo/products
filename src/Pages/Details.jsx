import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import axios from 'axios'
import './detail.css'


export default function Detail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Ajuste l'URL pour correspondre au bon format d'API
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data)
        setLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setLoading(false)
      })
  }, [id])

  if (loading) return <div className="text-center p-4">Chargement...</div>
  if (error) return <div className="text-center p-4 text-red-500">Erreur: {error}</div>

  return (
    <>
      <Nav />
      <div className="detail-container">
        {product && (
          <div className="detail">
            <img src={product.image} alt={product.title} className="detail-image" />
            <div className="detail-info">
                <h2 className="text-xl font-bold my-2">{product.title}</h2>
            <h4 className="text-gray-600">{product.category}</h4>
            <h3 className="text-green-600 font-bold prix">${product.price}</h3>
            <p className="my-2">{product.description}</p>
            <div className='avis'>
              <span><span className='note'>{product.rating.rate}</span>  / 5 </span> <br />
              <span className='return'> ({product.rating.count} notes)</span>
            </div>
            </div>
            
          </div>
        )}
      </div>
      <Footer/>
    </>
  )
}
