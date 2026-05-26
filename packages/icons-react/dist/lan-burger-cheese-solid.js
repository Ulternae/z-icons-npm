import React from 'react';

export const LanBurgerCheeseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M54 224c-12.2 0-22-9.9-22-22 0-17.2 2.6-34.4 10.8-49.5C65 111.7 125.1 32 256 32s191 79.6 213.2 120.5c8.2 15.1 10.8 32.3 10.8 49.5 0 12.2-9.9 22-22 22zm194 48 72 48 72-48h80c22.1 0 40 17.9 40 40s-17.9 40-40 40H40c-22.1 0-40-17.9-40-40s17.9-40 40-40zm208 128c13.3 0 24.4 11 20.4 23.6-10.1 32.6-40.5 56.4-76.4 56.4H112c-36 0-66.4-23.7-76.4-56.4C31.6 411 42.7 400 56 400zM280 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-136 56a24 24 0 1 0 0-48 24 24 0 1 0 0 48m248-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanBurgerCheeseSolid;
