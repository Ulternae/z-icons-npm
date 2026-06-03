import React from 'react';

export const LanPersonCarryBox = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 384 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0 80a56 56 0 1 0 0-112 56 56 0 1 0 0 112m.5 32C28.9 112 0 140.9 0 176.5V272c0 25.2 11.9 48.9 32 64l76.8 57.6c12.1 9.1 19.2 23.3 19.2 38.4v96c0 8.8 7.2 16 16 16s16-7.2 16-16v-96c0-25.2-11.9-48.9-32-64V239.4l.5 1.1c12.8 28.9 41.5 47.5 73.1 47.5H336c26.5 0 48-21.5 48-48v-96c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v96c0 5.4.9 10.6 2.6 15.5-16.1-2.4-30.1-12.8-36.8-28l-34.3-77.2C113.1 127 90 112 64.5 112M240 256c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h96c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16zM0 528c0 8.8 7.2 16 16 16s16-7.2 16-16V396L3.2 374.4c-1.1-.8-2.1-1.6-3.2-2.5zm96-352v168l-44.8-33.6C39.1 301.3 32 287.1 32 272v-96c0-17.7 14.3-32 32-32s32 14.3 32 32"})
);

export default LanPersonCarryBox;
