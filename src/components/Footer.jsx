import './footer.css'
export default function Footer(params) {
    

    return(
        <>
                         <footer className="footer">
  <div className="footer-container">
    <div className="footer-content">
      <div className="footer-section propos">
        <h3>À propos</h3>
        <p>
          Nous somme une entreprise innovante dédiée à créer des solutions
          numériques exceptionnelles pour nos clients. Nous vendons tout types 
          de produits et vous pouvez nous contacter pour une commande sur mesure 
          si vous trouvez pas ce que vous chercher sur notre site 
        </p>
      
      </div>

     
    
      <div className="footer-section">
        <h3>Contact</h3>
        <p>
           123 Rue de la Technologie
          <br />
          1000 Bruxelles, Belgique
        </p>
        <p> +32 2 123 45 67</p>
        <p> contact@gmail.com</p>
      </div>
    </div>
  <hr />
    <div className="footer-bottom">
      <p>© 2025 Emil.</p>

    </div>
  </div>
</footer>
        </>
    )
}