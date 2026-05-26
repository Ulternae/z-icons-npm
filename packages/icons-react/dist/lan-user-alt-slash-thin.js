import React from 'react';

export const LanUserAltSlashThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M13.7-29.8c-3.1-3.1-8.2-3.1-11.3 0s-3.1 8.2 0 11.3l560 560c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3L298.9 255.5C364.5 250 416 195 416 128 416 57.3 358.7 0 288 0c-67 0-122 51.5-127.5 117.1zm162.4 162.5c-.1-1.6-.1-3.1-.1-4.7 0-61.9 50.1-112 112-112s112 50.1 112 112-50.1 112-112 112c-1.6 0-3.1 0-4.7-.1zM64 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24c0-88.4 71.6-160 160-160h10.2l-15.9-15.9C139.7 307.1 64 384.7 64 480"})
);

export default LanUserAltSlashThin;
