import React from 'react';

export const LanCaretLargeRightThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 256 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 256c0 10.2-4.1 20.1-11.3 27.3L89.9 438.1c-6.4 6.4-15 9.9-24 9.9l-3.5-.2c-16-1.6-28.7-14.3-30.3-30.3l-.2-3.5V97.9c0-17.6 13.4-32 30.5-33.8l3.5-.2c7.9 0 15.5 2.7 21.5 7.7l2.5 2.3 154.8 154.7c7.2 7.2 11.3 17.1 11.3 27.3zm-16 0c0-6-2.4-11.8-6.6-16L78.6 85.2c-3.3-3.3-7.9-5.2-12.7-5.2C56 80 48 88 48 97.9V414c0 9.9 8 17.9 17.9 17.9 4.8 0 9.3-1.9 12.7-5.3L233.4 272c4.2-4.2 6.6-10 6.6-16"})
);

export default LanCaretLargeRightThin;
