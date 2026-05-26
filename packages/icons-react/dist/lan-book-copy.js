import React from 'react';

export const LanBookCopy = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M224 64c0-35.3 28.7-64 64-64h240c26.5 0 48 21.5 48 48v192c0 20.9-13.4 38.7-32 45.3V352h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H288c-35.3 0-64-28.7-64-64zm64 224c-17.7 0-32 14.3-32 32s14.3 32 32 32h224v-64zm-32-23.4c9.4-5.4 20.3-8.6 32-8.6h240c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16H288c-17.7 0-32 14.3-32 32zM64 128h112v32H64c-17.7 0-32 14.3-32 32v200.6c9.4-5.4 20.3-8.6 32-8.6h132.1c9 12.9 20.7 23.8 34.2 32H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h224v-48h32v48h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H64c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64"})
);

export default LanBookCopy;
