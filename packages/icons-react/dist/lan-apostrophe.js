import React from 'react';

export const LanApostrophe = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 192 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M78.7 320.1c-8.8.7-15.3 8.5-14.6 17.3s8.5 15.4 17.3 14.6l8-.7c58-4.8 102.7-53.4 102.7-111.6L192 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64h64c11.7 0 22.6-3.1 32-8.6v24.2c0 41.6-31.9 76.3-73.4 79.7l-8 .7zM160 160c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32h64c17.7 0 32 14.3 32 32z"})
);

export default LanApostrophe;
