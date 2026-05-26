import React from 'react';

export const LanCircleNotch = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M223.7 17.6c1.7 8.7-3.9 17.1-12.5 18.9C108.9 57.2 32 147.6 32 256c0 123.7 100.3 224 224 224s224-100.3 224-224c0-108.4-76.9-198.8-179.2-219.5-8.7-1.8-14.3-10.2-12.5-18.9s10.2-14.2 18.9-12.5C424 28.8 512 132.1 512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 132.1 88 28.8 204.8 5.1c8.7-1.7 17.1 3.9 18.9 12.5"})
);

export default LanCircleNotch;
