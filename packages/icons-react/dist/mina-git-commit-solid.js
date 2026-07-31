import React from 'react';

export const MinaGitCommitSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M12 8.25a3.75 3.75 0 0 0-3.675 3H3a.75.75 0 0 0 0 1.5h5.325a3.751 3.751 0 0 0 7.35 0H21a.75.75 0 0 0 0-1.5h-5.325a3.75 3.75 0 0 0-3.675-3"})
);

export default MinaGitCommitSolid;
