import React from 'react';

export const LanSplitRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -8.05 512 528.1',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M391-1c9.4-9.4 24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39h-80.2c-12.7 0-24.9 5.1-33.9 14.1L193.9 256l122 121.9c9 9 21.2 14.1 33.9 14.1H430l-39-39c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l80 80c9.4 9.4 9.4 24.6 0 33.9l-80 80c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l39-39h-80.2c-25.5 0-49.9-10.1-67.9-28.1L150.1 280H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h126.1L282 100.1c18-18 42.4-28.1 67.9-28.1h80.2l-39-39c-9.4-9.4-9.4-24.6 0-33.9z"})
);

export default LanSplitRegular;
