import React from 'react';

export const LanNoseSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M159.9 0H96C78.3 0 64 14.3 64 32v215.3c15.2-4.8 31.3-7.3 48-7.3h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24C50.1 288 0 338.1 0 400c0 56.4 41.7 103.1 96 110.9.6-43.7 36.2-78.9 80-78.9 44.2 0 80 35.8 80 80h83.7c59.8 0 108.3-48.5 108.3-108.3 0-23.2-7.4-45.7-21.2-64.4L185.6 13c-6-8.2-15.6-13-25.7-13"})
);

export default LanNoseSolid;
