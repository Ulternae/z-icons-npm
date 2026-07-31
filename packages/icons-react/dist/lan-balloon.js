import React from 'react';

export const LanBalloon = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 192C0 86 86 0 192 0s192 86 192 192c0 128-160 240-160 240l27.9 41.8c2.7 4 4.1 8.8 4.1 13.6 0 13.6-11 24.6-24.6 24.6h-78.9c-13.6 0-24.6-11-24.6-24.6 0-4.8 1.4-9.6 4.1-13.6l28-41.8S0 320 0 192m192 224s160-112 160-224c0-88.4-71.6-160-160-160S32 103.6 32 192c0 112 160 224 160 224m-24 64h48l-24-40zm-56-304c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-53 43-96 96-96 8.8 0 16 7.2 16 16s-7.2 16-16 16c-35.3 0-64 28.7-64 64"})
);

export default LanBalloon;
