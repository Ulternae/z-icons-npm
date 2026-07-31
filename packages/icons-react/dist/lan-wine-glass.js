import React from 'react';

export const LanWineGlass = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 320 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48.6 11.8C50.5 4.8 56.8 0 64 0h192c7.2 0 13.5 4.8 15.4 11.8l43 157.8c3.7 13.5 5.5 27.4 5.5 41.3 0 82.4-63.4 149.9-144 156.6V512h80c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V367.5C63.4 360.8 0 293.3 0 210.9c0-14 1.9-27.9 5.5-41.3l43-157.8zM41.3 160l-4.9 18c-2.9 10.7-4.4 21.8-4.4 32.9C32 280 88 336 157.1 336h5.8C232 336 288 280 288 210.9c0-11.1-1.5-22.2-4.4-32.9l-4.9-18zm8.7-32h220l-26.2-96H76.2z"})
);

export default LanWineGlass;
