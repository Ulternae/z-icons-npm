import React from 'react';

export const LanHexagonMinusSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M33.5 291.8c-12.7-22.2-12.7-49.4 0-71.5l96.2-168.1C142.5 29.8 166.4 16 192.2 16h191.6c25.8 0 49.7 13.8 62.5 36.2l96.2 168.1c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.1c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2zM200 232c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanHexagonMinusSolid;
