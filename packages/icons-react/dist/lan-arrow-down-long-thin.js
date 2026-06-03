import React from 'react';

export const LanArrowDownLongThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 576.025',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M154.3 541.7c3.1 3.1 8.2 3.1 11.3 0l152-152c3.1-3.1 3.1-8.2 0-11.3s-8.2-3.1-11.3 0L168 516.7V-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v540.7L13.7 378.4c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l152 152z"})
);

export default LanArrowDownLongThin;
