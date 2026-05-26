import React from 'react';

export const LanPantiesRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M567.3 118.6c5.5 4.6 8.7 11.3 8.7 18.5V192c0 8.9-5 17.1-12.9 21.3L501 245.7c-72 37.6-125.4 103-147.7 181.1l-10.2 35.8c-3 10.3-12.4 17.4-23.1 17.4h-64c-10.7 0-20.1-7.1-23.1-17.4l-10.2-35.8C200.4 348.7 147 283.2 75 245.7l-62.1-32.4C5 209.1 0 200.9 0 192v-54.9c0-7.1 3.2-13.9 8.7-18.5s12.7-6.4 19.8-5.1C103.9 127.8 192.7 136 288 136s184.1-8.2 259.6-22.5c7-1.3 14.3.6 19.8 5.1zm-39.3 47C455.9 177.4 374.3 184 288 184s-167.9-6.6-240-18.3v11.8l49.2 25.7c83.7 43.6 145.7 119.7 171.6 210.5l5.3 18.4h27.8l5.3-18.4c25.9-90.7 88-166.8 171.6-210.5l49.2-25.7v-11.8z"})
);

export default LanPantiesRegular;
