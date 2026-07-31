import React from 'react';

export const LanTrafficConeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"m173.7 128 38.6-98.2C219.4 11.8 236.7 0 256 0s36.6 11.8 43.7 29.8l38.6 98.2zm-25.1 64h214.9l37.7 96H110.9zM48 448l37.7-96h340.6l37.7 96h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"})
);

export default LanTrafficConeSolid;
