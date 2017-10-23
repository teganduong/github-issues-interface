import { accessToken } from '../api-key.js';

const baseUrl = 'https://api.github.com';
const username = 'teganduong';

export const fetchRepos = () => {
  const endpoint = `${baseUrl}/users/${username}/repos?access_token=${accessToken}`;

  return fetch(endpoint).then(resp => resp.json());
};
