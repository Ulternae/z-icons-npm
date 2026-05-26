import React from 'react';

export const LanPiRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 32C10.8 32 0 42.7 0 56s10.8 24 24 24h88v229.4c0 44.9-11.4 89-33.2 128.2l-3.8 6.7c-6.4 11.6-2.3 26.2 9.3 32.6s26.2 2.3 32.6-9.3l3.8-6.8c25.8-46.4 39.3-98.5 39.3-151.5V79.9h144v326.6c0 40.6 32.9 73.4 73.4 73.4 27.8 0 53.2-15.7 65.7-40.6l2.3-4.7c5.9-11.9 1.1-26.3-10.7-32.2s-26.3-1.1-32.2 10.7l-2.3 4.7c-4.3 8.6-13.1 14.1-22.8 14.1-14.1 0-25.4-11.4-25.4-25.4V79.9h72c13.3 0 24-10.7 24-24s-10.7-24-24-24z"})
);

export default LanPiRegular;
