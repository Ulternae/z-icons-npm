import React from 'react';

export const LanBottleBabyRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 320 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M124.6 17.7 128 16V0c0-17.7 14.3-32 32-32s32 14.3 32 32v16l3.4 1.7C212.9 26.5 224 44.4 224 64c17.7 0 32 14.3 32 32v48l27.5 45.8c13.4 22.4 20.5 48 20.5 74.1V480c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V263.9c0-26.1 7.1-51.7 20.5-74.1L64 144V96c0-17.7 14.3-32 32-32 0-19.6 11.1-37.5 28.6-46.3M256 480V263.9c0-17.4-4.7-34.5-13.7-49.4L228.8 192H91.2l-13.5 22.5c-9 14.9-13.7 32-13.7 49.4v8.1h40c13.3 0 24 10.7 24 24s-10.7 24-24 24H64v64h40c13.3 0 24 10.7 24 24s-10.7 24-24 24H64v48c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16"})
);

export default LanBottleBabyRegular;
