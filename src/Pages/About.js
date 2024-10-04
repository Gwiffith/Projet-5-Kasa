import React from 'react';
import './About.scss'
import CardTitle from '../Components/Banner/Banner';
import backgroundAbout from '../Assets/backgroundAbout.png';
import Collapse from '../Components/Collapse/Collapse';

function About() {

    return (
        <main>
          <div>
            {/* Utilisation de CardTitle avec un titre et une image personnalisée */}
            <CardTitle title="" backgroundImage={backgroundAbout} brightness={70} />
          </div>
          <div className='Collapses-container'>
              {/* Collapse avec un titre et un contenu */}
              <Collapse title="Fiabilité">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.</p>
              </Collapse>

              <Collapse title="Respect">
                <p>La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
              </Collapse>

              <Collapse title="Service">
                <p>La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.</p>
              </Collapse>

              <Collapse title="Sécurité">
                <p>La sécurité est la priporité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hote qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
              </Collapse>        
          </div>

        </main>
      );
    
}

export default About;
