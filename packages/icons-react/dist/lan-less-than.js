import React from 'react';

export const LanLessThan = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M478.5 41.3c3.7 8 .2 17.5-7.8 21.2L54 256l416.7 193.5c8 3.7 11.5 13.2 7.8 21.3s-13.2 11.5-21.3 7.8l-448-208C3.6 267.9 0 262.2 0 256s3.6-11.9 9.3-14.5l448-208c8-3.7 17.5-.2 21.3 7.8z"})
);

export default LanLessThan;
