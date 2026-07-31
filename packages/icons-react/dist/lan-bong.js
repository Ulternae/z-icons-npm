import React from 'react';

export const LanBong = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M160 32h-16c-8.8 0-16-7.2-16-16s7.2-16 16-16h224c8.8 0 16 7.2 16 16s-7.2 16-16 16h-16v185.7c16.5 9.5 31.4 21.5 44.4 35.3l53-53-12.7-12.7c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l48 48c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L472 222.6l-55.7 55.7c20 30.3 31.7 66.6 31.7 105.7 0 46.4-16.5 89-43.9 122.2-3 3.7-7.6 5.8-12.3 5.8H120.3c-4.8 0-9.3-2.1-12.3-5.8C80.6 473 64.1 430.4 64.1 384c0-71.1 38.6-133.1 96-166.3zm32 0v195.2c0 6-3.4 11.5-8.7 14.2-32.9 16.8-59.1 44.6-74 78.6h293.4c-14.8-33.9-41.1-61.8-74-78.6-5.4-2.7-8.7-8.2-8.7-14.2V32zm220.8 320H99.2c-2.1 10.3-3.2 21-3.2 32 0 36 11.9 69.3 32 96h256c20.1-26.7 32-60 32-96 0-11-1.1-21.7-3.2-32"})
);

export default LanBong;
