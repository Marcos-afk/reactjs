import axios from 'axios';

export const loadRepositories = async () => {
  const { data } = await axios.get(
    'https://api.github.com/users/Marcos-afk/repos',
  );
  return data;
};

export const loadUserData = async () => {
  const { data } = await axios.get('https://api.github.com/users/Marcos-afk');
  return data;
};
