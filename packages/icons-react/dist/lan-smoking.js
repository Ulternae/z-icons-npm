import React from 'react';

export const LanSmoking = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 0c8.8 0 16 7.2 16 16v27c0 40.3 16 79 44.5 107.5l21 21C485 191 496 217.4 496 245v27c0 8.8-7.2 16-16 16s-16-7.2-16-16v-27c0-19.1-7.6-37.4-21.1-50.9l-21-21C387.4 138.6 368 91.8 368 43V16c0-8.8 7.2-16 16-16m176 288c-8.8 0-16-7.2-16-16v-27c0-40.3-16-79-44.5-107.5l-21-21C459 97 448 70.6 448 43V16c0-8.8 7.2-16 16-16s16 7.2 16 16v27c0 19.1 7.6 37.4 21.1 50.9l21 21C556.6 149.4 576 196.2 576 245v27c0 8.8-7.2 16-16 16M64 384c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h224v-96zm256 96h160v-96H320zM0 416c0-35.3 28.7-64 64-64h416c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H64c-35.3 0-64-28.7-64-64zm576-48v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V368c0-8.8 7.2-16 16-16s16 7.2 16 16"})
);

export default LanSmoking;
