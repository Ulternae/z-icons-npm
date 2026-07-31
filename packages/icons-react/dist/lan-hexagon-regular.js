import React from 'react';

export const LanHexagonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M33.5 291.8c-12.7-22.2-12.7-49.4 0-71.5l96.2-168.1C142.5 29.8 166.4 16 192.2 16h191.6c25.8 0 49.7 13.8 62.5 36.2l96.2 168.1c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.1c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2zm41.7-47.7c-4.2 7.4-4.2 16.5 0 23.8L171.4 436c4.3 7.5 12.2 12.1 20.8 12.1h191.6c8.6 0 16.6-4.6 20.8-12.1l96.2-168c4.2-7.4 4.2-16.5 0-23.8L404.7 76.1c-4.3-7.5-12.3-12.1-20.9-12.1H192.2c-8.6 0-16.6 4.6-20.8 12.1z"})
);

export default LanHexagonRegular;
