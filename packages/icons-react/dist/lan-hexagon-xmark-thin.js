import React from 'react';

export const LanHexagonXmarkThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M47.4 283.9 143.6 452c10 17.4 28.5 28.2 48.6 28.2h191.6c20.1 0 38.6-10.8 48.6-28.2l96.2-168.1c9.9-17.2 9.9-38.4 0-55.6L432.4 60.2C422.5 42.8 403.9 32 383.8 32H192.2c-20.1 0-38.6 10.8-48.6 28.2l-96.2 168c-9.9 17.2-9.9 38.4 0 55.6zm-13.9 7.9c-12.7-22.2-12.7-49.4 0-71.5l96.2-168.1C142.5 29.8 166.4 16 192.2 16h191.6c25.8 0 49.7 13.8 62.5 36.2l96.2 168.1c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.1c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2zm160.8-129.5c3.1-3.1 8.2-3.1 11.3 0l82.3 82.3 82.3-82.3c3.1-3.1 8.2-3.1 11.3 0s3.1 8.2 0 11.3l-82.3 82.3 82.3 82.3c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-82.3-82.3-82.3 82.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l82.3-82.3-82.3-82.3c-3.1-3.1-3.1-8.2 0-11.3"})
);

export default LanHexagonXmarkThin;
