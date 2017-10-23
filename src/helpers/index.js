import { accessToken, username } from '../config.js';

const baseUrl = 'https://api.github.com';

export const fetchRepos = () => {
  const endpoint = `${baseUrl}/users/${username}/repos?access_token=${accessToken}`;

  return fetch(endpoint).then(resp => resp.json());
};

export const fetchRepoIssues = (repoUrl) => (
  fetch(`${repoUrl}/issues`).then(resp => resp.json())
);

export const addBackgroundColor = (element) => {
  element.style.background = '#e1e4e8';
};

export const removeBackgroundColor = (element) => {
  element.style.background = 'none';
};
