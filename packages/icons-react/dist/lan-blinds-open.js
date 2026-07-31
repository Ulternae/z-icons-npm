import React from 'react';

export const LanBlindsOpen = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 32C7.2 32 0 39.2 0 48s7.2 16 16 16h112v272c0 8.8 7.2 16 16 16s16-7.2 16-16V64h272c8.8 0 16-7.2 16-16s-7.2-16-16-16zm416 160c8.8 0 16-7.2 16-16s-7.2-16-16-16H208v32zM16 160c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v-32zm0 160h64v-32H16c-8.8 0-16 7.2-16 16s7.2 16 16 16m416-32H208v32h224c8.8 0 16-7.2 16-16s-7.2-16-16-16M16 448h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16s7.2 16 16 16"})
);

export default LanBlindsOpen;
