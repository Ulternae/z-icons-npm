import React from 'react';

export const LanCoffinThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M114.5 21.5c3-3.5 7.4-5.5 12-5.5h131c4.6 0 9 2 12 5.5l91 104c4.8 5.5 7.5 12.7 7.5 20q0 4.35-1.2 8.4l-95.5 330.5c-2 6.8-8.2 11.6-15.4 11.6H128c-7.1 0-13.4-4.7-15.4-11.6L17.2 153.9c-.8-2.7-1.2-5.6-1.2-8.4 0-7.4 2.7-14.5 7.5-20zm-12-10.5-91 104C4.1 123.5 0 134.3 0 145.6q0 6.6 1.8 12.9l95.5 330.4c4 13.7 16.5 23.1 30.7 23.1h127.9c14.3 0 26.8-9.4 30.7-23.1l95.5-330.6q1.8-6.3 1.8-12.9c0-11.2-4.1-22.1-11.5-30.6l-91-104C275.5 4 266.7 0 257.5 0h-131c-9.2 0-18 4-24.1 10.9z"})
);

export default LanCoffinThin;
