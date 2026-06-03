import React from 'react';

export const LanUserHardHat = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 448 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M208-32c-15.3 0-28 10.7-31.2 25C129.5 11.8 96 58 96 112h-8c-8.8 0-16 7.2-16 16s7.2 16 16 16h8c0 70.7 57.3 128 128 128s128-57.3 128-128h8c8.8 0 16-7.2 16-16s-7.2-16-16-16h-8c0-54-33.5-100.2-80.8-119-3.2-14.3-16-25-31.2-25zm112 176c0 53-43 96-96 96s-96-43-96-96zm-192-32c0-35.5 19.3-66.6 48-83.2V48c0 8.8 7.2 16 16 16s16-7.2 16-16V0h32v48c0 8.8 7.2 16 16 16s16-7.2 16-16V28.8c28.7 16.6 48 47.6 48 83.2zm48 240h96c79.5 0 144 64.5 144 144 0 8.8 7.2 16 16 16s16-7.2 16-16c0-97.2-78.8-176-176-176h-96C78.8 320 0 398.8 0 496c0 8.8 7.2 16 16 16s16-7.2 16-16c0-79.5 64.5-144 144-144"})
);

export default LanUserHardHat;
