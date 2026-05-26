import React from 'react';

export const LanNotEqualRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M379.8 69.5c7.5-11 4.6-25.9-6.4-33.3s-25.9-4.6-33.3 6.4L282 128H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h225.4L140.6 336H24c-13.3 0-24 10.7-24 24s10.7 24 24 24h83.9l-39.8 58.5c-7.5 11-4.6 25.9 6.4 33.3s25.9 4.6 33.3-6.3L166 384h258c13.3 0 24-10.7 24-24s-10.7-24-24-24H198.6l108.8-160H424c13.3 0 24-10.7 24-24s-10.7-24-24-24h-83.9l39.8-58.5z"})
);

export default LanNotEqualRegular;
