import React from 'react';

export const LanYThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M14.4 35.2c-2.6-3.5-7.6-4.3-11.2-1.7s-4.3 7.6-1.7 11.2L184 290.6V472c0 4.4 3.6 8 8 8s8-3.6 8-8V290.6L382.4 44.7c2.6-3.5 1.9-8.6-1.7-11.2s-8.6-1.9-11.2 1.7L192 274.6z"})
);

export default LanYThin;
