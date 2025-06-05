import { useEffect, useState } from 'react';

import '../Pages/home.css'
export default function ReactCarousel(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);

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

    // Auto-play du carrousel
    useEffect(() => {
        if (data.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex((prevIndex) => 
                    prevIndex === data.length - 1 ? 0 : prevIndex + 1
                );
            }, 4000);
            
            return () => clearInterval(interval);
        }
    }, [data.length]);

    const goToPrevious = () => {
        setCurrentIndex(currentIndex === 0 ? data.length - 1 : currentIndex - 1);
    };

    const goToNext = () => {
        setCurrentIndex(currentIndex === data.length - 1 ? 0 : currentIndex + 1);
    };

    if (loading) return <div className="text-center p-4">Chargement...</div>;
    if (error) return <div className="text-center p-4 text-red-500">Erreur: {error}</div>;

    if (data.length === 0) return <div className="text-center p-4">Aucun produit trouvé</div>;

    return (
        <div className="carou min-h-screen flex flex-col items-center justify-center p-4">
            <h1 className="text-center text-3xl font-bold mb-8 text-white">Nos Produits</h1>
            
            <div className="relative bg-white rounded-lg shadow-lg overflow-hidden" style={{ height: '500px', width: '500px' }}>
                {/* Image uniquement */}
                <div className="   ">
                    <img
                        src={data[currentIndex]?.image}
                        alt={data[currentIndex]?.title}
                        className=" carou-img"
                        style={{ maxHeight: '400px', maxWidth: '400px' }}
                    />
                </div>
            </div>
        </div>
    );
}