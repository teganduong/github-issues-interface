import React from 'react';

const RepoList = ({ repos, onRepoClick }) => {
  const allRepos = repos.map(repo =>
    <li key={repo.id} 
      data-url={repo.url}
      className="list-group-item"
      onClick={onRepoClick}>{repo.name}
    </li>
  );

  return (
    <div className="col-sm-6">
      <div className="panel panel-default">
        <div className="panel-heading">List of Repositories</div>
        <ul className="list-group">{allRepos}</ul>
      </div>
    </div>
  );
};

export default RepoList;
