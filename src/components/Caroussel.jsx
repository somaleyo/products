import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import '../Pages/home.css';

export default function Caroussel(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then(response => response.json())
            .then((products) => {
                setData(products);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    useEffect(() => {
        if (data.length > 0) {
            const carouselElement = document.getElementById('carouselExample');
            if (carouselElement) {
                const carousel = new window.bootstrap.Carousel(carouselElement, {
                    interval: 4000,
                    ride: 'carousel',
                    pause: false,
                    wrap: true,
                });
            }
        }
    }, [data]);

    if (loading) return <div className="text-center p-4">Chargement...</div>;
    if (error) return <div className="text-center p-4 text-red-500">Erreur: {error}</div>;

  

    return (
        <>
            <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">Nos Produits</h1>

            <div
                id="carouselExample"
                className="carousel slide mx-auto shadow-lg bg-white"
                style={{ maxWidth: '700px',maxHeight:"480px" }}
            >
                <div className="carousel-inner">
                    {data.map((product, index) => (
                        <div
                            key={product.id}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                            style={{ minHeight: '500px' }}
                        >
                            <div className="d-flex flex-column justify-content-center align-items-center text-center p-4 h-100">
                                <img
                                    src={product.image}
                                    className="mb-4"
                                    alt={product.title}
                                    style={{
                                        maxHeight: '350px',
                                        maxWidth: '300px',
                                        objectFit: 'contain'
                                    }}
                                />
                                
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
