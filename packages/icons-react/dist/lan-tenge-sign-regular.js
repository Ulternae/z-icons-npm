import React from 'react';

export const LanTengeSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24s-10.7 24-24 24H24C10.7 80 0 69.3 0 56m0 112c0-13.3 10.7-24 24-24h336c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v264c0 13.3-10.7 24-24 24s-24-10.7-24-24V192H24c-13.3 0-24-10.7-24-24"})
);

export default LanTengeSignRegular;
