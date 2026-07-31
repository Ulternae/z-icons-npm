import React from 'react';

export const LanKeyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M208 176c0-70.7 57.3-128 128-128s128 57.3 128 128-57.3 128-128 128c-10.4 0-20.5-1.2-30.1-3.6-8.1-2-16.7.5-22.6 6.4L254.1 336H200c-13.3 0-24 10.7-24 24v40h-40c-13.3 0-24 10.7-24 24v40H48v-78.1l157.2-157.2c5.9-5.9 8.3-14.5 6.4-22.6-2.3-9.6-3.6-19.7-3.6-30.1M336 0c-97.2 0-176 78.8-176 176 0 9.5.7 18.8 2.2 27.9L7 359c-4.5 4.5-7 10.6-7 17v112c0 13.3 10.7 24 24 24h112c13.3 0 24-10.7 24-24v-40h40c13.3 0 24-10.7 24-24v-40h40c6.4 0 12.5-2.5 17-7l27.2-27.2c9.1 1.4 18.4 2.2 27.9 2.2 97.2 0 176-78.8 176-176S433.2 0 336 0m32 176a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
);

export default LanKeyRegular;
