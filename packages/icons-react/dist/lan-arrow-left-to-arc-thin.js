import React from 'react';

export const LanArrowLeftToArcThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 256c0 132.5 107.5 240 240 240 4.4 0 8 3.6 8 8s-3.6 8-8 8C114.6 512 0 397.4 0 256S114.6 0 256 0c4.4 0 8 3.6 8 8s-3.6 8-8 8C123.5 16 16 123.5 16 256m266.3 125.7-120-120c-3.1-3.1-3.1-8.2 0-11.3l120-120c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3L187.3 248H504c4.4 0 8 3.6 8 8s-3.6 8-8 8H187.3l106.3 106.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0z"})
);

export default LanArrowLeftToArcThin;
