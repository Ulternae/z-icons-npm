import React from 'react';

export const LanUTurnRightUpThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416.4 0c8.1 0 16.8 3.6 22.6 9.3l112 112c20.8 20.8 4 52.7-22.6 54.6h-48v128c0 114.9-93.1 208-208 208s-208-93.1-208-208v-208c.8-17.4 13.9-32 32-32h64c17.4.8 32 13.9 32 32v208c0 44.2 35.8 80 80 80s80-35.8 80-80v-128h-48c-12.9 0-24.6-7.8-29.6-19.7-4.9-11.9-2.2-25.7 6.9-34.9l112-112c5.9-5.7 14.7-9.3 22.7-9.3m0 16c-4.1 0-7.5 1.6-11.7 5.1L293.1 132.7c-10 10-2.8 27.3 11.3 27.3h56c4.4 0 8 3.6 8 8v136c0 53-43 96-96 96s-96-43-96-96V96c0-9.4-7.4-15.2-16-16h-64c-9.4 0-15.2 7.4-16 16v208c0 106 86 192 192 192s192-86 192-192V168c0-4.2 3.8-8 8-8h56c13.3-1 21.7-16.9 11.3-27.3L428 21c-3.6-2.9-7.1-4.5-11.6-5"})
);

export default LanUTurnRightUpThin;
