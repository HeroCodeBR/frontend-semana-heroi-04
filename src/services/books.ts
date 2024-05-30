import axios from 'axios';

export const searchBooks = async (input: string) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/books`, {
      params: {
        search: input,
      },
    });
    return response.data.data;
  } catch (error) {
    return null;
  }
};
