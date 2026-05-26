import React from 'react';

export const LanWind = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M288 16c0 8.8 7.2 16 16 16h64c26.5 0 48 21.5 48 48s-21.5 48-48 48H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h352c44.2 0 80-35.8 80-80S412.2 0 368 0h-64c-8.8 0-16 7.2-16 16m64 384c0 8.8 7.2 16 16 16h56c48.6 0 88-39.4 88-88s-39.4-88-88-88H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h408c30.9 0 56 25.1 56 56s-25.1 56-56 56h-56c-8.8 0-16 7.2-16 16M112 512h64c44.2 0 80-35.8 80-80s-35.8-80-80-80H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h160c26.5 0 48 21.5 48 48s-21.5 48-48 48h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16"})
);

export default LanWind;
