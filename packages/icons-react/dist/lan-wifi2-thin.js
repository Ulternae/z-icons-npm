import React from 'react';

export const LanWifi2Thin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M30.7 301.1c38.2-47 96.4-77.1 161.7-77.1s123.5 30.1 161.7 77.1c2.8 3.4 7.8 4 11.3 1.2s4-7.8 1.2-11.3c-41.1-50.6-103.9-83-174.2-83S59.3 240.4 18.3 291.1c-2.8 3.4-2.3 8.5 1.2 11.3s8.5 2.3 11.3-1.2zM224.4 432c0 17.7-14.3 32-32 32s-32-14.3-32-32 14.3-32 32-32 32 14.3 32 32m16 0c0-26.5-21.5-48-48-48s-48 21.5-48 48 21.5 48 48 48 48-21.5 48-48"})
);

export default LanWifi2Thin;
