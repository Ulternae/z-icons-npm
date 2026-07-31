import React from 'react';

export const LanSquareNfiRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 80H64c-8.8 0-16 7.2-16 16v16H0V96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v16h-48V96c0-8.8-7.2-16-16-16M0 400h48v16c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16v-16h48v16c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm93-227.7 35 63v-51.4c0-13.3 10.7-24 24-24s24 10.7 24 24v144c0 10.9-7.4 20.5-18 23.2s-21.7-2-27-11.6l-35-63v51.4c0 13.3-10.7 24-24 24s-24-10.7-24-24v-144c0-10.9 7.4-20.5 18-23.2s21.7 2 27 11.6M208 184c0-13.3 10.7-24 24-24h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-56v32h40c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v40c0 13.3-10.7 24-24 24s-24-10.7-24-24zm192 0v144c0 13.3-10.7 24-24 24s-24-10.7-24-24V184c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanSquareNfiRegular;
