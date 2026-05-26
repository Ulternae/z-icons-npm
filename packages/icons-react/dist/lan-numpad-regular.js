import React from 'react';

export const LanNumpadRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 48a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-72 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m360 0a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-72 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-88 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-72a56 56 0 1 1 0 112 56 56 0 1 1 0-112M96 192a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-72 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m344 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-72a56 56 0 1 1 0 112 56 56 0 1 1 0-112m-128 56a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-72 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0M80 352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-72a56 56 0 1 1 0 112 56 56 0 1 1 0-112m304 56a16 16 0 1 0-32 0 16 16 0 1 0 32 0m-72 0a56 56 0 1 1 112 0 56 56 0 1 1-112 0m-88 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-72a56 56 0 1 1 0 112 56 56 0 1 1 0-112m16 200c0-8.8-7.2-16-16-16s-16 7.2-16 16 7.2 16 16 16 16-7.2 16-16m40 0c0 30.9-25.1 56-56 56s-56-25.1-56-56 25.1-56 56-56 56 25.1 56 56"})
);

export default LanNumpadRegular;
