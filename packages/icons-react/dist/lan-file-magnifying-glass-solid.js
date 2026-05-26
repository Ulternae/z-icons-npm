import React from 'react';

export const LanFileMagnifyingGlassSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 64C0 28.7 28.7 0 64 0h149.5c17 0 33.3 6.7 45.3 18.7l106.5 106.6c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm208-5.5V152c0 13.3 10.7 24 24 24h93.5zM272 320c0-53-43-96-96-96s-96 43-96 96 43 96 96 96c17.8 0 34.4-4.8 48.7-13.2l38.3 38.3c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-38.3-38.3c8.5-14.3 13.3-31 13.3-48.9zm-96-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default LanFileMagnifyingGlassSolid;
