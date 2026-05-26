import React from 'react';

export const LanDistributeSpacingHorizontal = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M432 0c-8.8 0-16 7.2-16 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16M288 368c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16zm32-224c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v224c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48zM32 16c0-8.8-7.2-16-16-16S0 7.2 0 16v480c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
);

export default LanDistributeSpacingHorizontal;
