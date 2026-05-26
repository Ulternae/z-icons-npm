import React from 'react';

export const LanTachometerAltSlow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 480a224 224 0 1 0 0-448 224 224 0 1 0 0 448m0-480a256 256 0 1 1 0 512 256 256 0 1 1 0-512m24 96a24 24 0 1 1-48 0 24 24 0 1 1 48 0m-56 256a32 32 0 1 0 64 0 32 32 0 1 0-64 0m-32 0c0-18.6 7.9-35.3 20.5-47l-82.6-153.4c-4.2-7.8-1.3-17.5 6.5-21.7s17.5-1.3 21.7 6.5l82.6 153.4q7.35-1.8 15.3-1.8c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64m200-208a24 24 0 1 1-48 0 24 24 0 1 1 48 0m24 88a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-296 24a24 24 0 1 1-48 0 24 24 0 1 1 48 0"})
);

export default LanTachometerAltSlow;
