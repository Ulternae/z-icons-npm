import React from 'react';

export const CoreArrowUpFromLine = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 512H0v-64h448zM203.8 7.2c12.6-10.3 31.1-9.5 42.8 2.2L397.2 160l-45.3 45.3-96-96V352h-64V109.3l-96 96L50.7 160 201.3 9.4l2.4-2.2z"})
);

export default CoreArrowUpFromLine;
