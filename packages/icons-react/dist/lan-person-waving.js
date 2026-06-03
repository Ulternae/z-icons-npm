import React from 'react';

export const LanPersonWaving = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M352-16c0-8.8-7.2-16-16-16s-16 7.2-16 16v43c0 37.5-26 70-62.6 78.1l-99.7 22.2c-30.6 6.8-56.9 26.1-72.6 53.2L18.2 296c-4.4 7.6-1.8 17.4 5.8 21.9s17.4 1.8 21.9-5.8L112 197.8V528c0 8.8 7.2 16 16 16s16-7.2 16-16V368h96v160c0 8.8 7.2 16 16 16s16-7.2 16-16V134.3c47.2-14 80-57.5 80-107.3zM240 336h-96V166.2c6.4-3.5 13.4-6.1 20.6-7.7l75.4-16.8zM168 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0m80 0a56 56 0 1 0-112 0 56 56 0 1 0 112 0"})
);

export default LanPersonWaving;
