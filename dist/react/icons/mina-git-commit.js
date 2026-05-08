import React from 'react';

export const MinaGitCommit = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-9-3h6m6 0h6"})
);

export default MinaGitCommit;
