import React from 'react';

export const LanGreaterThan = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M33.5 41.3c-3.7 8-.2 17.5 7.8 21.2L458 256 41.3 449.5c-8 3.7-11.5 13.2-7.8 21.3s13.2 11.5 21.2 7.8l448-208c5.6-2.6 9.3-8.3 9.3-14.5s-3.6-11.9-9.3-14.5l-448-208c-8-3.7-17.5-.2-21.2 7.8z"})
);

export default LanGreaterThan;
