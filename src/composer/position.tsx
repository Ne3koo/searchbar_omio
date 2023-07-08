import React, { useState } from 'react';
import axios from 'axios';

export const fetchCitySuggestions = async (searchTerm: string): Promise<string[]> => {
  try {
    const response = await axios.get(`https://api.comparatrip.eu/cities/autocomplete/?q=${searchTerm}`);
    const cities: string[] = response.data.map((city: any) => city.local_name);
    return cities;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const updateSearchBarInput = async (inputId: string, searchTerm: string): Promise<void> => {
  try {
    const cities = await fetchCitySuggestions(searchTerm);
    const inputElement = document.getElementById(inputId) as HTMLInputElement;

    if (inputElement) {
      inputElement.value = cities[0] || ''; // Update the input value with the first city suggestion
    }
  } catch (error) {
    console.error(error);
  }
};
