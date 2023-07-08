import React, { useState } from 'react';
import '../App.css';
import { ReactComponent as pos } from './assets/pos.svg';


const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search term:', searchTerm);
    // Ajoutez ici la logique pour effectuer la recherche
  };

  return (
<div>
{/* Bloc searchbar */}
<form className="search-bar" onSubmit={handleSubmit}>
    {/* formulaire de voyage */}
  <div>
    {/* Contient le premier input */}
    <div>
      {/* Aligne les inputs */}
      <div>
        {/* contient le SVG */}
        <div id='posSvg'color="#ccc"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs>
        <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a8 8 0 1 1 0-16 8 8 0 0 1 0 16z" 
        id="PinStart__a"></path></defs><use fill="currentColor" xlinkHref="#PinStart__a" fill-rule="evenodd"></use></svg>
        </div>
      </div>
      <input type="text" autoCorrect="off" autoComplete="off" data-e2e="departurePositionInput"
      data-id="departurePosition" placeholder="from: City, Station or Airport" value="" id=""></input>
      <div>
        {/* Contient le SVG permettant permutation au From...TO */}
      <div id='changeInputSvG' color="#5E90CC"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M6.632 5.763L3.757 8.961a.978.978 0 0 1-1.454 0 1.21 1.21 0 0 1 0-1.618l4.499-5.005a1 1 0 0 1 1.487 0l4.397 4.892a1.21 1.21 0 0 1-.073 1.691.978.978 0 0 1-1.38-.073l-2.58-2.869v11.017a1 1 0 0 1-1 1h-.021a1 1 0 0 1-1-1V5.763zm11.022 12.261l2.578-2.868a.978.978 0 0 1 1.454 0 1.21 1.21 0 0 1 0 1.617l-4.397 4.892a1 1 0 0 1-1.487 0l-4.499-5.005a1.21 1.21 0 0 1 0-1.618.978.978 0 0 1 1.454 0l2.875 3.198V7.007a1 1 0 0 1 1-1h.022a1 1 0 0 1 1 1v11.017z" id="Swapper__a"></path></defs><use fill="currentColor" xlinkHref="#Swapper__a" fill-rule="evenodd"></use></svg></div>
      </div>

      {/* Second input */}
      <div>
        <div>
          {/* Contient le SVG */}
          <div id='posSvg'color="#ccc"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><defs><path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-8-3a8 8 0 1 1 16 0c0 1.842-1.176 4.053-3.53 6.635L12 22l-4.47-5.365C5.175 14.053 4 11.842 4 10z" id="Pin__a"></path></defs><use fill="currentColor" xlinkHref="#Pin__a" fill-rule="evenodd"></use></svg></div>
        </div>
        <input type="text" autoCorrect="off" autoComplete="off" data-e2e="arrivalPositionInput" 
        data-id="arrivalPosition" placeholder="to: City, Station or Airport" value="" id=""></input>
      </div>
      <div>
        {/* Date & add retour */}
        <div id='date'>
          <div id='posSvg' color="#A1A9C3"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5h2a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2V4a1 1 0 1 1 2 0v1h8V4a1 1 0 0 1 2 0v1zM5 10a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H5z" fill="currentColor" fill-rule="evenodd"></path></svg></div>
          <div><span data-e2e="buttonDepartureDateText"><span>Sat, Jul 08</span></span></div>
        </div>
        {/* Retour */}
        <div id='date'>
        <div role="button" data-e2e="buttonReturnDate" id="buttonReturnDate">
          <div><span data-e2e="buttonReturnDateText">Add return</span></div>
        </div>
        </div>
      </div>
      {/* Bouton */}
      <div>
        <button data-e2e="buttonSearch" type="submit">
          <div ><span>Search</span></div>
        </button>
      </div>
    </div>
  </div>
</form>

</div>
  );
};

export default SearchBar;
