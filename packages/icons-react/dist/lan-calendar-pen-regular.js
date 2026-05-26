import React from 'react';

export const LanCalendarPenRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M120 0c13.3 0 24 10.7 24 24v40h160V24c0-13.3 10.7-24 24-24s24 10.7 24 24v40h32c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128c0-35.3 28.7-64 64-64h32V24c0-13.3 10.7-24 24-24m0 112H64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V128c0-8.8-7.2-16-16-16zm147.7 86.2L162.4 303.6c-3.1 3.1-5.3 6.9-6.3 11.2l-8.4 33.6 33.6-8.4c4.2-1.1 8.1-3.2 11.1-6.3l105.4-105.4c4-4 6.2-9.4 6.2-15 0-11.7-9.5-21.3-21.3-21.3-5.6 0-11 2.2-15 6.2m15-54.2c38.2 0 69.3 31 69.3 69.3 0 18.4-7.3 36-20.3 49L226.4 367.6c-9.2 9.2-20.8 15.8-33.4 18.9l-49.4 12.3c-3 .8-6.1 1.1-9.3 1.1-21.1 0-38.2-17.1-38.2-38.2 0-3.1.4-6.2 1.1-9.3l12.4-49.4c3.2-12.7 9.7-24.2 18.9-33.4l105.3-105.3c13-13 30.6-20.3 49-20.3z"})
);

export default LanCalendarPenRegular;
