import React from 'react';

export const LanCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M444.7 65.5c3.6 2.6 4.3 7.6 1.7 11.2l-288 392c-1.4 1.9-3.5 3.1-5.8 3.2s-4.6-.7-6.3-2.3l-144-144c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l137.5 137.5L433.6 67.3c2.6-3.6 7.6-4.3 11.2-1.7z"})
);

export default LanCheckThin;
