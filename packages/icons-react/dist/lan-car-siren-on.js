import React from 'react';

export const LanCarSirenOn = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M87.2-30.3c-7.9-4-17.5-.7-21.5 7.2s-.8 17.5 7.1 21.4l64 32c7.9 4 17.5.7 21.5-7.2s.7-17.5-7.2-21.5l-64-32zM320 64l-4.4-17.4C308.8 19.2 284.2 0 256 0s-52.8 19.2-59.6 46.6L192 64h-32.8c-44.5 0-83.1 30.5-93.4 73.8L52.6 193C22.7 198.4 0 224.5 0 256v208c0 8.8 7.2 16 16 16s16-7.2 16-16v-48h448v48c0 8.8 7.2 16 16 16s16-7.2 16-16V256c0-31.5-22.7-57.6-52.6-63l-13.2-55.2C435.9 94.5 397.3 64 352.8 64zm-35.4-9.7L287 64h-62l2.4-9.7C230.7 41.2 242.5 32 256 32s25.3 9.2 28.6 22.3m161.7-77.5c-4-7.9-13.6-11.1-21.5-7.2l-64 32c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l64-32c7.9-4 11.1-13.6 7.2-21.5M96.9 145.2c6.9-28.8 32.6-49.2 62.3-49.2h193.6c29.6 0 55.4 20.3 62.3 49.2l11.1 46.8H85.8zM433.8 224H448c17.7 0 32 14.3 32 32v128H32V256c0-17.7 14.3-32 32-32zM128 304a24 24 0 1 0-48 0 24 24 0 1 0 48 0m280 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
);

export default LanCarSirenOn;
