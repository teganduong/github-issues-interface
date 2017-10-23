import React from 'react';

const RepoIssuesList = ({ repoIssues }) => {
  const issuesList = repoIssues.map(issue =>
    <div key={issue.id}>{issue.title}</div>
  );

  return (
    <div className="col-sm-6">
      {issuesList}
    </div>
  );
};

export default RepoIssuesList;
