import React from 'react';
import SearchBar from './composer/searchbar';
import './App.css';
import batbat from './assets/img/batbat.png'

const App: React.FC = () => {

  return (
    <body>
      <div className="app">
        <SearchBar />
      </div>

      <div id='impressions'>
        <h1>Ma première réalisation ReactJS TypeScript</h1>
        <h2>Temps de réalisation ?</h2>
        <p>Pour être honnête, J'ai du apprendre ReactJS car je ne connaissais absolument pas le framework ainsi que
          Typescript car c'était la première fois que je l'utilisais aussi <br />
          De plus, l'utilisation d'API (qui n'est malheureusement pas fini car ils y a de nombreux conflits que je n'ai pu résoudre)
          a été une première aussi. Depuis vendredi 07/07/2023 et ce jusqu'au jeudi 14/07/2023 je me suis beaucoup renseigné,
          j'ai travaillé environ 6 à 8 heures par jour si je prend en compte le temps qu'il m'a fallu pour assimiler le peu de bases que
          j'ai acquis à travers divers forums, vidéos, aide d'amis etc...
        </p>
        <h2>Choix techniques</h2>
        <p>J'ai décidé de découper la barre de recherche du site omio.com en étant un composant qui appelait différents sous composant
          J'ai donc essayé de mettre en place (bien que l'organisation de mes fichiers reste certainement à revoir) une découpe plus ou 
          moins correcte de cette barre de recherche, afin de mieux gérer mes branches sur GitHub et pour que ce soit plus facile pour moi
          de me repérer dans tout ça. De plus, j'ai travaillé de manière a m'appliquer sur une tâche particulière par jour, je ne
          travaillais jamais sur deux "sous composant" en même temps afin de ne pas me perdre en chemin.
        </p>
        <h2>Difficultés</h2>
        <p>J'ai réalisé la difficulté de l'exercice dès le moment ou j'ai lu la consigne. Le plus dur pour moi a été de réussir à ne 
          pas stresser et accomplir ce que je pouvais faire malgrès le fait que je n'avais aucune connaissance utile à ce projet.
          Je dirai que la partie la plus compliquée pour moi (même si je n'ai pas une représentation exacte de ce qui était demandé)
          a été la gestion des API... J'ai passé trois jours a essayer de les travailler et comprendre ce qui ne va pas. Je n'ai toujours
          pas réussi mais je compte bien continuer a chercher, même si la date limite de ce projet est dépassé.
        </p>
        <h2>Design</h2>
        <p>J'ai essayé d'être le plus ressemblant possible au site d'Omio.com, et je dois avouer que je suis fier du résultat. Peut-être 
          est-ce trop peu, mais ce n'est pas la partie sur laquelle je me suis concentré. J'ai eu quelques difficultés au responsive 
          étant donné que je ne suis pas habitué à travailler souvent le CSS mais rien de bien méchant.
        </p>
        <h2>Remarques & avis général</h2>
        <p>Au final, même si je n'ai pas réussi a terminer complètement l'exercice dans les temps, j'ai eu l'opportunité de tester
          mes connaissances & ma vitesse d'apprentissage sur un temps contre la montre. De plus, ça m'a permis de m'intéresser au ReactJS
          et de comprendre la différence entre le TypeScript et le JavaScript. Je suis globalement assez fier de ma réalisation, avec
          un arrière goût de "trop peu" que je vais corriger en essayant de mon côté d'améliorer. J'espère tout de même que ma motivation
          et mon projet vous feront envie. <br />
          <i>
            De toute façon, je suis sûr que oui étant donné que j'ai BatBat avec moi ;)
          </i>
        </p>
        <div>
      <img src={batbat} alt="Ma image" className='batbat'/>
    </div>
      </div>
    </body>

  );
};

export default App;
