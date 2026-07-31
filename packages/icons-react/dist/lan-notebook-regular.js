import React from 'react';

export const LanNotebookRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M176 48v416h-48c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16zm48 0h192c8.8 0 16 7.2 16 16v384c0 8.8-7.2 16-16 16H224zM128 0C92.7 0 64 28.7 64 64v40H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v40c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64z"})
);

export default LanNotebookRegular;
