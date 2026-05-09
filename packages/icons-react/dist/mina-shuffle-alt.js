import React from 'react';

export const MinaShuffleAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"d":"m19 16.765 2 2.117L19 21m0-18 2 2.118-2 2.117"}), React.createElement('path', {"d":"M21 5.118h-3.15C14.62 5.118 12 8.199 12 12s2.62 6.882 5.85 6.882H21m-18 0h3.15C9.38 18.882 12 15.801 12 12S9.38 5.118 6.15 5.118H3"})
);

export default MinaShuffleAlt;
