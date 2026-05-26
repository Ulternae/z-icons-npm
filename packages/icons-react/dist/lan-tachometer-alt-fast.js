import React from 'react';

export const LanTachometerAltFast = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m24-416a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-56 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0c0-18.6-7.9-35.3-20.5-47l82.6-153.4c4.2-7.8 1.3-17.5-6.5-21.7s-17.5-1.3-21.7 6.5l-82.6 153.4q-7.35-1.8-15.3-1.8c-35.3 0-64 28.7-64 64s28.7 64 64 64 64-28.7 64-64M168 144a24 24 0 1 0-48 0 24 24 0 1 0 48 0M96 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48m344-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanTachometerAltFast;
