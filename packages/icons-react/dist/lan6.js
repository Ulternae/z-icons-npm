import React from 'react';

export const Lan6 = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M272 32c8.8 0 16 7.2 16 16s-7.2 16-16 16H152C94.6 64 48 110.6 48 168v88.4c24.9-29.6 62.3-48.4 104-48.4h64c75.1 0 136 60.9 136 136s-60.9 136-136 136h-64c-75.1 0-136-60.9-136-136 0-2 0-4 .1-6-.1-.7-.1-1.3-.1-2V168C16 92.9 76.9 32 152 32zM48 344c0 57.4 46.6 104 104 104h64c57.4 0 104-46.6 104-104s-46.6-104-104-104h-64c-57.4 0-104 46.6-104 104"})
);

export default Lan6;
