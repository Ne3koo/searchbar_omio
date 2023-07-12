import React, { useState } from 'react';
import { fetchCitySuggestions } from './position';
import { fetchPopularCities } from './fromPopoular';
import { fetchPopularCitiesFrom } from './toPopular';
import DateComponent from './date';
import Popup from './popup';

const SearchBar: React.FC = () => {
  const [searchTermInput1, setSearchTermInput1] = useState('');
  const [searchTermInput2, setSearchTermInput2] = useState('');
  const [citySuggestionsInput1, setCitySuggestionsInput1] = useState<string[]>([]);
  const [citySuggestionsInput2, setCitySuggestionsInput2] = useState<string[]>([]);

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>, inputId: string) => {
    const value = event.target.value;
    if (inputId === 'input1') {
      setSearchTermInput1(value);
      if (value.trim() === '') {
        const suggestions = await fetchCitySuggestions(value);
        setCitySuggestionsInput1(suggestions);
      } else {
        const popularCities = await fetchPopularCities();
        setCitySuggestionsInput1(popularCities);
      }
    } else if (inputId === 'input2') {
      setSearchTermInput2(value);
      const suggestions = await fetchCitySuggestions(value);
      setCitySuggestionsInput2(suggestions);
    }
  };  

  const handleInputBlur = (inputId: string) => {
    if (inputId === 'input1') {
      setCitySuggestionsInput1([]);
    } else if (inputId === 'input2') {
      setCitySuggestionsInput2([]);
    }
  };
  const handleSuggestionClick = (suggestion: string, inputId: string) => {
    if (inputId === 'input1') {
      setSearchTermInput1(suggestion);
    } else if (inputId === 'input2') {
      setSearchTermInput2(suggestion);
    }
  };  

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Search term 1:', searchTermInput1);
    console.log('Search term 2:', searchTermInput2);
  };

  // Stockage de l'api onClick sur l'input 1
  const [popularCities, setPopularCities] = useState<string[]>([]);

  const handleInput1Click = async () => {
    const cities = await fetchPopularCities();
    setPopularCities(cities);
  };
  // Stockage de l'état onClick sur l'input 2

  const [popularCitiesFrom, setPopularCitiesFrom] = useState<string[]>([]);

  const handleInput2Click = async () => {
    const citiesFrom = await fetchPopularCitiesFrom(searchTermInput1);
    setPopularCitiesFrom(citiesFrom);
  };

  // Définissez une fonction de permutation des valeurs des inputs
  const swapInputValues = () => {
    setSearchTermInput1(searchTermInput2);
    setSearchTermInput2(searchTermInput1);
  };

  // Définissez une fonction de gestion du clic sur la div "changeInputSvg"
  const handleSwapClick = () => {
    swapInputValues();
  };

  return (
    <body>
      {/* Formulaire barre de recherche */}
      <form className="search-bar" onSubmit={handleSubmit}>
        <div className='select'>
          {/* Aller simple / Aller-Retour */}
          <select name="way" id="way">
            <option value="one-way">one-way</option>
            <option value="round-trip">round-trip</option>
          </select>
          {/* Choix des passagers */}
          <div>
            <Popup />
          </div>
        </div>

        {/* Premier input */}
        <div>

          {/* Input */}
          <div className='relativ'>
            {/* SVG de l'input */}
            <div id='SvgLocalisation' color="#ccc">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm0 4a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"
                  fill="currentColor"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              autoCorrect="off"
              autoComplete=""
              placeholder="from: City, Station or Airport"
              value={searchTermInput1}
              id="input1"
              onFocus={handleInput1Click}
              onChange={(event) => handleInputChange(event, 'input1')}
              onBlur={() => handleInputBlur('input1')}
            />
            {/* Contient le SVG permettant permutation au From...TO */}
            <div id='changeInputSvG' color="#5E90CC" onClick={handleSwapClick}>
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M6.632 5.763L3.757 8.961a.978.978 0 0 1-1.454 0 1.21 1.21 0 0 1 0-1.618l4.499-5.005a1 1 0 0 1 
              1.487 0l4.397 4.892a1.21 1.21 0 0 1-.073 1.691.978.978 0 0 1-1.38-.073l-2.58-2.869v11.017a1 1 0 0 1-1 
              1h-.021a1 1 0 0 1-1-1V5.763zm11.022 12.261l2.578-2.868a.978.978 0 0 1 1.454 0 1.21 1.21 0 0 1 0 
              1.617l-4.397 4.892a1 1 0 0 1-1.487 0l-4.499-5.005a1.21 1.21 0 0 1 0-1.618.978.978 0 0 1 1.454 0l2.875 
              3.198V7.007a1 1 0 0 1 1-1h.022a1 1 0 0 1 1 1v11.017z">
                </path> <use fill="currentColor" xlinkHref="#Swapper__a" fill-rule="evenodd"></use>
              </svg>
            </div>
            {/* API suggestions villes */}
            <ul>
            {searchTermInput1.trim() === '' ? (
              citySuggestionsInput1.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion, 'input1')}>
                  {suggestion}
                </li>
              ))
            ) : (
              popularCities.map((city, index) => (
                <li key={index} onClick={() => handleSuggestionClick(city, 'input1')}>
                  {city}
                </li>
              ))
            )}
            </ul>
          </div>
          {/* fermeture balise du premier input */}
        </div>

        {/* Second input */}
        <div>
          {/* Input 2 */}
          <div className='relativ'>
            {/* Contient le SVG */}
            <div id='posSvg' color="#ccc">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-8-3a8 8 0 1 1 16 0c0 1.842-1.176 4.053-3.53 6.635L12 
              22l-4.47-5.365C5.175 14.053 4 11.842 4 10z"
                  fill-rule="evenodd"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              autoCorrect="off"
              autoComplete=""
              placeholder="to: City, Station or Airport"
              value={searchTermInput2}
              id="input2"
              onClick={handleInput2Click}
              onChange={(event) => handleInputChange(event, 'input2')}
              onBlur={() => handleInputBlur('input2')}
            />
            {/* API suggestion */}
            <ul>
            {searchTermInput2.trim() === '' ? (
              citySuggestionsInput2.map((suggestion, index) => (
                <li key={index} onClick={() => handleSuggestionClick(suggestion, 'input2')}>
                  {suggestion}
                </li>
              ))
            ) : (
              popularCitiesFrom.map((city, index) => (
                <li key={index} onClick={() => handleSuggestionClick(city, 'input2')}>
                  {city}
                </li>
              ))
            )}
            </ul>
          </div>
          {/* Fermeture second input */}
        </div>
        {/* Date & Retour */}
        <DateComponent />

        {/* Bouton de validation */}
        <input type="submit" value="search" className="search"></input>
      </form>
    </body>
  );
};

export default SearchBar;
