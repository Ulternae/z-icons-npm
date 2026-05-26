import React from 'react';

export const LanMelon = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M480 256c0-35.8-8.4-69.7-23.4-99.7-8.4 56.6-47.7 127.6-110.2 190.1S212.9 448.2 156.3 456.6c30 14.9 63.9 23.4 99.7 23.4 123.7 0 224-100.3 224-224M55.4 355.7c8.4-56.6 47.7-127.6 110.2-190.1S299.1 63.8 355.7 55.4C325.7 40.5 291.8 32 256 32 132.3 32 32 132.3 32 256c0 35.8 8.4 69.7 23.4 99.7M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0M414.3 97.7c-11.8-11.8-38.7-18.4-84.2-3.2-43.5 14.5-94.7 46.5-142 93.8s-79.3 98.5-93.8 142c-15.2 45.5-8.6 72.4 3.2 84.2s38.7 18.4 84.2 3.2c43.5-14.5 94.7-46.5 142-93.8s79.3-98.5 93.8-142c15.2-45.5 8.6-72.4-3.2-84.2"})
);

export default LanMelon;
