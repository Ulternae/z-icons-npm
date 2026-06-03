import React from 'react';

export const LanUserAltSlashRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576 576.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L318.2 252.4C374.3 238.8 416 188.3 416 128 416 57.3 358.7 0 288 0c-60.3 0-110.8 41.7-124.4 97.7zm231.3 231.4-62.8-62.8c-1-5.1-1.5-10.3-1.5-15.7 0-44.2 35.8-80 80-80s80 35.8 80 80-35.8 80-80 80c-5.4 0-10.6-.5-15.7-1.5m-38 97.6C139.7 307.1 64 384.7 64 480v8c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c0-70.7 57.3-128 128-128h42.2z"})
);

export default LanUserAltSlashRegular;
