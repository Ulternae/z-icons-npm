import React from 'react';

export const LanNotebookSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64v40H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v80H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h40v40c0 35.3 28.7 64 64 64h48V0h-48C92.7 0 64 28.7 64 64M416 0H224v512h192c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64"})
);

export default LanNotebookSolid;
