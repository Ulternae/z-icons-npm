import React from 'react';

export const LanRulerHorizontal = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M528 352H48c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h48v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h56v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h56v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h56v48c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h56v80c0 8.8 7.2 16 16 16s16-7.2 16-16v-80h48c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16M112 128H48c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V176c0-26.5-21.5-48-48-48z"})
);

export default LanRulerHorizontal;
