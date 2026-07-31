import React from 'react';

export const LanQuoteRightAlt = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 304c0 61.9-50.1 112-112 112h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c44.2 0 80-35.8 80-80v-24.6c-9.4 5.4-20.3 8.6-32 8.6h-64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64zm-32-80v-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32M64 256h64c17.7 0 32-14.3 32-32v-64c0-17.7-14.3-32-32-32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32m128-64v112c0 61.9-50.1 112-112 112H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c44.2 0 80-35.8 80-80v-24.6c-9.4 5.4-20.3 8.6-32 8.6H64c-35.3 0-64-28.7-64-64v-64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64z"})
);

export default LanQuoteRightAlt;
