import React from 'react';

export const LanArrowUpFromArcThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 496C123.5 496 16 388.5 16 256c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 141.4 114.6 256 256 256s256-114.6 256-256c0-4.4-3.6-8-8-8s-8 3.6-8 8c0 132.5-107.5 240-240 240M130.3 122.3c-3.1 3.1-3.1 8.2 0 11.3s8.2 3.1 11.3 0L248 27.3V344c0 4.4 3.6 8 8 8s8-3.6 8-8V27.3l106.3 106.3c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-120-120C260.2.8 258.1 0 256 0s-4.2.8-5.7 2.3z"})
);

export default LanArrowUpFromArcThin;
