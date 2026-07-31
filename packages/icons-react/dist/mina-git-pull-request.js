import React from 'react';

export const MinaGitPullRequest = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6M6 9v12m12-6V7.5a2 2 0 0 0-2-2h-2.5"}), React.createElement("path", {"d":"M14.5 8 12 5.5 14.5 3"})
);

export default MinaGitPullRequest;
