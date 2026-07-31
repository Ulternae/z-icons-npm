import React from 'react';

export const LanArrowRightToArcThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M496 256c0 132.5-107.5 240-240 240-4.4 0-8 3.6-8 8s3.6 8 8 8c141.4 0 256-114.6 256-256S397.4 0 256 0c-4.4 0-8 3.6-8 8s3.6 8 8 8c132.5 0 240 107.5 240 240M229.7 381.7l120-120c3.1-3.1 3.1-8.2 0-11.3l-120-120c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3L324.7 248H8c-4.4 0-8 3.6-8 8s3.6 8 8 8h316.7L218.4 370.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0z"})
);

export default LanArrowRightToArcThin;
