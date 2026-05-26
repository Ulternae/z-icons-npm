import React from 'react';

export const LanListDropdownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v80h416V96c0-26.5-21.5-48-48-48zM0 184V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm432 8H16v224c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zM96 280c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8m0 96c0-4.4 3.6-8 8-8h240c4.4 0 8 3.6 8 8s-3.6 8-8 8H104c-4.4 0-8-3.6-8-8M309.7 90.3l26.3 26.3 26.3-26.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-32 32c-3.1 3.1-8.2 3.1-11.3 0l-32-32c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0z"})
);

export default LanListDropdownThin;
