import React, { Component } from 'react';
import { fetchRepos } from '../helpers/index.js';
import RepoList from '../components/RepoList.js';

class MainContainer extends Component {
  state = {
    repos: []
  }

  componentDidMount() {
    this.getGithubRepos();
  }

  getGithubRepos() {
    fetchRepos()
      .then(data => {
        this.setState({ repos: data });
      });
  }

  render() {
    return (
      <div>
        <RepoList repos={this.state.repos} />
      </div>
    );
  }
}

export default MainContainer;
