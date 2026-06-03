import React from 'react';

export const CorePhoneSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -45.2 640 602.5',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M621.5 0 64.3 557.3 19 512 576.3-45.2zM445.3 266.6c17.3-.8 35 5.4 48.2 18.6l53.5 53.5c25 25 25 65.5 0 90.5l-26.9 26.9c-45 45-109.6 64.7-172 52.8-37.9-7.2-73.6-20.6-106.2-38.8zM147 29.2c25-25 65.5-25 90.5 0L291 82.7c13.2 13.2 19.4 30.8 18.6 48.2L106.2 334.3C87.9 301.7 74.6 266 67.4 228.1c-11.9-62.4 7.8-127.1 52.8-172z"})
);

export default CorePhoneSlashSolid;
