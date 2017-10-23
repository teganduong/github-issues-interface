import React from 'react';

const RepoList = ({ repos }) => {
  const allRepos = repos.map(repo =>
    <div key={repo.id}>{repo.name}</div>
  );

  return (
    <div>
      {allRepos}
    </div>
  );
};

export default RepoList;
