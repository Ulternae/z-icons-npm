import React from 'react';

export const LanTruckSuv = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M389.1 81.7 444.3 192H240.1V64h120.4c12.1 0 23.2 6.8 28.6 17.7M208 64v128H39.3L91.6 82.2C96.8 71.1 108.1 64 120.4 64zm256 160h48c17.7 0 32 14.3 32 32v64c0 15.6-11.1 28.6-25.9 31.4C503.4 323.2 474 304 440 304c-34.2 0-63.8 19.5-78.4 48H214.4c-14.6-28.5-44.2-48-78.4-48-34 0-63.4 19.2-78.1 47.4C43.1 348.6 32 335.6 32 320v-96zm63.5 158.1C555.3 375.2 576 350 576 320v-64c0-35.3-28.7-64-64-64h-32L417.7 67.4c-10.9-21.7-33-35.4-57.3-35.4h-240c-24.7 0-47.2 14.2-57.8 36.5L9.3 180.4c-6.1 12.9-9.3 27-9.3 41.3V320c0 30 20.7 55.2 48.5 62.1-.4 3.2-.5 6.5-.5 9.9 0 48.6 39.4 88 88 88s88-39.4 88-88c0-2.7-.1-5.4-.4-8h128.7c-.2 2.6-.4 5.3-.4 8 0 48.6 39.4 88 88 88s88-39.4 88-88c0-3.3-.2-6.6-.5-9.9zM80 392a56 56 0 1 1 112 0 56 56 0 1 1-112 0m360-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112"})
);

export default LanTruckSuv;
