import React from 'react';

export const CoreServerSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512 448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V288h512zm-144-80a32 32 0 1 0 0 64 32 32 0 1 0 0-64M448 0c35.3 0 64 28.7 64 64v160H0V64C0 28.7 28.7 0 64 0zm-80 80a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default CoreServerSolid;
