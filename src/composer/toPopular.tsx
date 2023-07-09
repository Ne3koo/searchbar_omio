import axios from 'axios';

export const fetchPopularCitiesFrom = async (city: string): Promise<string[]> => {
    try {
      const response = await axios.get(`https://api.comparatrip.eu/cities/popular/from/${city}/5`);
      const cities: string[] = response.data.map((city: any) => city.local_name);
      return cities;
    } catch (error) {
      console.error(error);
      return [];
    }
  };
  