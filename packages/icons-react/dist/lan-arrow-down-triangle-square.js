import React from 'react';

export const LanArrowDownTriangleSquare = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m235.3 379.3-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7V48c0-8.8 7.2-16 16-16s16 7.2 16 16v377.4l68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M320 432c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-96c-8.8 0-16 7.2-16 16zm64-364.5L309.3 192h149.4zM275.6 186l84.2-140.3C364.9 37.2 374.1 32 384 32s19.1 5.2 24.2 13.7L492.4 186c2.3 3.9 3.6 8.4 3.6 12.9 0 13.8-11.2 25.1-25.1 25.1H297c-13.8 0-25.1-11.2-25.1-25.1 0-4.5 1.2-9 3.6-12.9zM288 432v-96c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48"})
);

export default LanArrowDownTriangleSquare;
