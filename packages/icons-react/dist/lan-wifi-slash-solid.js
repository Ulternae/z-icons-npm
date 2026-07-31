import React from 'react';

export const LanWifiSlashSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -31.95 576.05 575.963',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M7-24.9c9.4-9.4 24.6-9.4 33.9 0l89.2 89.2C178.6 43.5 232 32 288 32c108.1 0 206.3 43 278.3 112.7 12.7 12.2 13 32.5.7 45.2s-32.6 13-45.3.7C461.2 132 378.9 96 288 96c-37.9 0-74.3 6.3-108.3 17.8l94.6 94.6c4.5-.3 9-.4 13.5-.4h.2c58.5 0 111.9 22.5 151.7 59.2 5.7 5.2 11.1 10.8 16.2 16.6.2.3.5.6.7.8 10.6 12.8 9.5 31.6-2.3 43.2l-30.2 30.4L569 503.1c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L7 9.1c-9.3-9.4-9.3-24.6 0-34M218.2 288c-19.2 9.3-36.2 22.3-50.2 38.2-11.7 13.3-31.9 14.5-45.2 2.8s-14.5-31.9-2.8-45.2c14.7-16.7 32-31.2 51.1-42.9zM44.7 114.5l45.7 45.7c-12.7 9.3-24.8 19.5-36.1 30.4-12.7 12.3-33 12-45.2-.7s-12-33 .7-45.2c11-10.7 22.7-20.8 34.9-30.2M288 384a48 48 0 1 1 0 96 48 48 0 1 1 0-96"})
);

export default LanWifiSlashSolid;
