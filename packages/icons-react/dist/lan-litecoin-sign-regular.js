import React from 'react';

export const LanLitecoinSignRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M112 56c0-13.3-10.7-24-24-24S64 42.7 64 56v164.5l-46.2 12.3C5 236.2-2.6 249.4.8 262.2s16.6 20.4 29.4 17l33.8-9V456c0 13.3 10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24H112V257.4l158.2-42.2c12.8-3.4 20.4-16.6 17-29.4s-16.6-20.4-29.4-17L112 207.7z"})
);

export default LanLitecoinSignRegular;
