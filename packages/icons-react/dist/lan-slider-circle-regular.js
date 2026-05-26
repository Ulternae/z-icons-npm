import React from 'react';

export const LanSliderCircleRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 256a80 80 0 1 0-160 0 80 80 0 1 0 160 0m45.8 24c-11.2 59.2-63.3 104-125.8 104-70.7 0-128-57.3-128-128s57.3-128 128-128c62.5 0 114.5 44.8 125.8 104H552c13.3 0 24 10.7 24 24s-10.7 24-24 24zm-300.2-48c-1.1 7.8-1.6 15.9-1.6 24s.6 16.2 1.6 24H24c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanSliderCircleRegular;
