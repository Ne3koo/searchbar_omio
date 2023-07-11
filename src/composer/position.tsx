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

