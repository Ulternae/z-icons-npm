import React from 'react';

export const LanArrowTrendDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M368 408c0 4.4 3.6 8 8 8h192c4.4 0 8-3.6 8-8V216c0-4.4-3.6-8-8-8s-8 3.6-8 8v172.7L325.7 154.4c-3.1-3.1-8.2-3.1-11.3 0L192 276.7 13.7 98.3c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l184 184c3.1 3.1 8.2 3.1 11.3 0L320 171.3 548.7 400H376c-4.4 0-8 3.6-8 8"})
);

export default LanArrowTrendDownThin;
