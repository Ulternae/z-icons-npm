import React from 'react';

export const LanChartMixedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M503.6 74.2c10.1-8.6 11.2-23.8 2.6-33.8s-23.8-11.2-33.8-2.6L320.2 168.3 207.8 69.9c-8.2-7.1-20.1-7.9-29.1-1.9l-168 112c-11 7.4-14 22.3-6.7 33.3s22.3 14 33.3 6.7L190 118.2l114.2 99.9c9 7.9 22.4 7.9 31.4.2l168-144zM216 248c0-13.3-10.7-24-24-24s-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24zm264 0c0-13.3-10.7-24-24-24s-24 10.7-24 24v208c0 13.3 10.7 24 24 24s24-10.7 24-24zm-136 64c0-13.3-10.7-24-24-24s-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24zM80 344c0-13.3-10.7-24-24-24s-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24z"})
);

export default LanChartMixedRegular;
