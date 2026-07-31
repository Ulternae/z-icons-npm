import React from 'react';

export const LanTachometerAltSlowest = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m24-416a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-56 256a32 32 0 1 1 64 0 32 32 0 1 1-64 0m96 0c0-35.3-28.7-64-64-64-17.5 0-33.4 7-44.9 18.4l-106.9-64.1c-7.6-4.5-17.4-2.1-22 5.5s-2.1 17.4 5.5 22l106.8 64.1c-1.7 5.8-2.6 11.9-2.6 18.2 0 35.3 28.7 64 64 64s64-28.7 64-64zM168 144a24 24 0 1 0-48 0 24 24 0 1 0 48 0m248 136a24 24 0 1 0 0-48 24 24 0 1 0 0 48m-24-136a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
);

export default LanTachometerAltSlowest;
