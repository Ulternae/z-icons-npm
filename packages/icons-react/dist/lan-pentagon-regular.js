import React from 'react';

export const LanPentagonRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M512.8 199 427 463.1H149.3L63.5 199 288.2 35.8zM316.4-3.1c-16.8-12.2-39.6-12.2-56.4 0L35.3 160.2c-16.8 12.2-23.9 33.9-17.4 53.7L103.7 478c6.4 19.8 24.9 33.2 45.7 33.2h277.7c20.8 0 39.2-13.4 45.7-33.2l85.8-264.1c6.4-19.8-.6-41.4-17.4-53.7z"})
);

export default LanPentagonRegular;
