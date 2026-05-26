import React from 'react';

export const LanVolumeLow = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m134.6 329.4 118.1 118c.4.4.9.6 1.4.6 1.1 0 1.9-.9 1.9-1.9V66c0-1.1-.9-1.9-1.9-1.9-.5 0-1 .2-1.4.6L134.6 182.6c-6 6-14.1 9.4-22.6 9.4H48c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h64c8.5 0 16.6 3.4 22.6 9.4M48 160h64L230.1 41.9c6.4-6.4 15-9.9 24-9.9 18.7 0 33.9 15.2 33.9 33.9V446c0 18.7-15.2 33.9-33.9 33.9-9 0-17.6-3.6-24-9.9L112 352H48c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48m329.6 19.2c23.3 17.5 38.4 45.4 38.4 76.8s-15.1 59.3-38.4 76.8c-7.1 5.3-17.1 3.9-22.4-3.2s-3.9-17.1 3.2-22.4C374 295.5 384 276.9 384 256s-10-39.5-25.6-51.2c-7.1-5.3-8.5-15.3-3.2-22.4s15.3-8.5 22.4-3.2"})
);

export default LanVolumeLow;
