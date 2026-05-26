import React from 'react';

export const LanLinesLeaningThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M376 32c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8m-94 .3c-4.3-1.1-8.6 1.5-9.8 5.7l-112 432c-1.1 4.3 1.5 8.6 5.7 9.8s8.6-1.5 9.8-5.7l112-432c1.1-4.3-1.5-8.6-5.7-9.8M191.4 43c1.7-4.1-.3-8.8-4.4-10.4s-8.8.3-10.4 4.4L.6 469c-1.7 4.1.3 8.8 4.4 10.4s8.8-.3 10.4-4.4z"})
);

export default LanLinesLeaningThin;
