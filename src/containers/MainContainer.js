import React, { Component } from 'react';
import {
  fetchRepos,
  fetchRepoIssues,
  addBackgroundColor,
  removeBackgroundColor
} from '../helpers/index.js';
import RepoList from '../components/RepoList.js';
import RepoIssuesList from '../components/RepoIssuesList.js';

const placeholder = document.createElement('li');
placeholder.className = 'placeholder';

class MainContainer extends Component {
  state = {
    repos: [],
    repoIssues: [],
    selectedRepo: null
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

  handleRepoClick = (e) => {
    const currentRepo = this.state.selectedRepo;
    const selectedRepo = e.currentTarget;
    const repoUrl = selectedRepo.getAttribute('data-url');
    fetchRepoIssues(repoUrl)
      .then(issues => this.setState({ repoIssues: issues, selectedRepo }));

    addBackgroundColor(selectedRepo);
    if (currentRepo) removeBackgroundColor(currentRepo);
  }

  handleDragStart = (e) => {
    this.draggedIssue = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
  }

  handleDragEnd = (e) => {
    this.draggedIssue.style.display = "block";
    this.draggedIssue.parentNode.removeChild(placeholder);
    const issues = this.state.repoIssues;
    const fromPosition = Number(this.draggedIssue.dataset.id);
    let toPosition = Number(this.overElement.dataset.id);

    if (fromPosition < toPosition) toPosition--;
    if (this.nodePlacement === 'after') toPosition++;

    issues.splice(toPosition, 0, issues.splice(fromPosition, 1)[0]);
    this.setState({ repoIssues: issues });
  }

  handleDragOver = (e) => {
    e.preventDefault();
    this.draggedIssue.style.display = 'none';

    if (e.target.className === 'placeholder') return;

    this.overElement = e.target;
    const relY = e.clientY - this.overElement.offsetTop;
    const height = this.overElement.offsetHeight / 2;
    const parent = e.target.parentNode;

    if (relY > height) {
      this.nodePlacement = 'after';
      parent.insertBefore(placeholder, e.target.nextElementSibling);
    } else if (relY < height) {
      this.nodePlacement = 'before';
      parent.insertBefore(placeholder, e.target);
    }
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
          onIssueDragStart={this.handleDragStart}
          onIssueDragEnd={this.handleDragEnd}
          onIssueDragOver={this.handleDragOver}
        />
      </div>
    );
  }
}

export default MainContainer;
