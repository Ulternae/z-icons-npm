import React from 'react';

export const LanFolderMagnifyingGlassSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 448H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h138.7c13.8 0 27.3 4.5 38.4 12.8l38.4 28.8c5.5 4.2 12.3 6.4 19.2 6.4H448c35.3 0 64 28.7 64 64v240c0 35.3-28.7 64-64 64M336 256c0-53-43-96-96-96s-96 43-96 96 43 96 96 96c17.8 0 34.4-4.8 48.7-13.2l38.3 38.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-38.3-38.3c8.5-14.3 13.3-31 13.3-48.9zm-96-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default LanFolderMagnifyingGlassSolid;
