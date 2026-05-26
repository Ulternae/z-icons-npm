import React from 'react';

export const LanUserMinusRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M304 304c97.2 0 176 78.8 176 176v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-70.7-57.3-128-128-128h-96c-70.7 0-128 57.3-128 128v8c0 13.3-10.7 24-24 24s-24-10.7-24-24v-8c0-97.2 78.8-176 176-176zm-48-48a128 128 0 1 1 0-256 128 128 0 1 1 0 256m0-208a80 80 0 1 0 0 160 80 80 0 1 0 0-160m344 104c13.3 0 24 10.7 24 24s-10.7 24-24 24H456c-13.3 0-24-10.7-24-24s10.7-24 24-24z"})
);

export default LanUserMinusRegular;
