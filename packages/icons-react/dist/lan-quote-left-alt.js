import React from 'react';

export const LanQuoteLeftAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M0 208C0 146.1 50.1 96 112 96h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-44.2 0-80 35.8-80 80v24.6c9.4-5.4 20.3-8.6 32-8.6h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm32 80v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32m352-32h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32m-128 64V208c0-61.9 50.1-112 112-112h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-32c-44.2 0-80 35.8-80 80v24.6c9.4-5.4 20.3-8.6 32-8.6h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64z"})
);

export default LanQuoteLeftAlt;
