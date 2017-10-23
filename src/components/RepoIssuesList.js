import React from 'react';

const RepoIssuesList = ({ repoIssues, onIssueDragStart, onIssueDragEnd, onIssueDragOver }) => {
  const issuesList = repoIssues.map((issue, i) =>
    <li key={issue.id}
      className="list-group-item"
      data-id={i}
      draggable="true"
      onDragStart={onIssueDragStart}
      onDragEnd={onIssueDragEnd}
    >{issue.title}
    </li>
  );

  return (
    <div className="col-sm-6">
      <div className="panel panel-default">
        <div className="panel-heading">Repository Issues</div>
        <ul className="list-group" onDragOver={onIssueDragOver}>
          {issuesList}
        </ul>
      </div>
    </div>
  );
};

export default RepoIssuesList;
