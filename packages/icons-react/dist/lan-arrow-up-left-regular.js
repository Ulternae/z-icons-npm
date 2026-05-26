import React from 'react';

export const LanArrowUpLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 64C10.7 64 0 74.7 0 88v240c0 13.3 10.7 24 24 24s24-10.7 24-24V145.9l295 295c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-295-295H264c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanArrowUpLeftRegular;
