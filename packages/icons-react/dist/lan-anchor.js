import React from 'react';

export const LanAnchor = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a48 48 0 1 0 0 96 48 48 0 1 0 0-96m-80 48c0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4v304.8c80.9-8 144-76.2 144-159.2v-28.7l-37.5 32.8c-6.7 5.8-16.8 5.1-22.6-1.5s-5.1-16.8 1.5-22.6l64-56c6-5.3 15-5.3 21.1 0l64 56c6.6 5.8 7.3 15.9 1.5 22.6s-15.9 7.3-22.6 1.5L448 275.3V304c0 106-86 192-192 192S64 410 64 304v-28.7l-37.5 32.8c-6.7 5.8-16.8 5.1-22.6-1.5s-5.1-16.8 1.6-22.6l64-56c6-5.3 15-5.3 21.1 0l64 56c6.7 5.8 7.3 15.9 1.5 22.6s-15.9 7.3-22.6 1.5L96 275.3V304c0 83 63.1 151.2 144 159.2V158.4c-36.5-7.4-64-39.7-64-78.4"})
);

export default LanAnchor;
