import React from 'react';

export const LanArrowUpArrowDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m509.7 389.7-120 120c-3.1 3.1-8.2 3.1-11.3 0l-120-120c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0L376 484.7V8c0-4.4 3.6-8 8-8s8 3.6 8 8v476.7l106.3-106.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3zM133.7 2.3l120 120c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L136 27.3V504c0 4.4-3.6 8-8 8s-8-3.6-8-8V27.3L13.7 133.7c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l120-120c3.1-3.1 8.2-3.1 11.3 0z"})
);

export default LanArrowUpArrowDownThin;
