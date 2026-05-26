import React from 'react';

export const LanArrowUpAZRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M406 45.3c-4.1-8.2-12.4-13.3-21.5-13.3s-17.4 5.1-21.5 13.3l-80 160c-5.9 11.9-1.1 26.3 10.7 32.2s26.3 1.1 32.2-10.7l13.4-26.7h85.2c1.7 0 3.3-.2 4.9-.5l13.6 27.1c5.9 11.9 20.3 16.7 32.2 10.7s16.7-20.3 10.7-32.2l-80-160zm-21.5 64.4 21.2 42.3h-42.3l21.2-42.3zm-96 202.3c0 13.3 10.7 24 24 24h86.1l-103 103c-6.9 6.9-8.9 17.2-5.2 26.2s12.4 14.8 22.1 14.8h144c13.3 0 24-10.7 24-24s-10.7-24-24-24h-86.1l103-103c6.9-6.9 8.9-17.2 5.2-26.2S466.2 288 456.5 288h-144c-13.3 0-24 10.7-24 24m-143-273c-9.4-9.4-24.6-9.4-33.9 0l-88 88c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47V456c0 13.3 10.7 24 24 24s24-10.7 24-24V113.9l47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-88-88z"})
);

export default LanArrowUpAZRegular;
