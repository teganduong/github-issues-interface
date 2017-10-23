import React, { Component } from 'react';
import { fetchRepos, fetchRepoIssues } from '../helpers/index.js';
import RepoList from '../components/RepoList.js';
import RepoIssuesList from '../components/RepoIssuesList.js';

class MainContainer extends Component {
  state = {
    repos: [],
    repoIssues: []
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

  handleRepoClick = (selectedRepo) => {
    fetchRepoIssues(selectedRepo.url)
      .then(issues => this.setState({ repoIssues: issues }));
  }

  render() {
    return (
      <div className="row">
        <RepoList
          repos={this.state.repos}
          onRepoClick={this.handleRepoClick}
        />
        <RepoIssuesList
          repoIssues={this.state.repoIssues}
        />
      </div>
    );
  }
}

export default MainContainer;
