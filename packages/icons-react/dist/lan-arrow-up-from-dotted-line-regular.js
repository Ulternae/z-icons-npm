import React from 'react';

export const LanArrowUpFromDottedLineRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M175 7c9.4-9.4 24.6-9.4 33.9 0L345 143c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-95-95V360c0 13.3-10.7 24-24 24s-24-10.7-24-24V81.9l-95 95c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9zM0 480c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32m138.7-32c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32m74.7 32c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32M352 448c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32"})
);

export default LanArrowUpFromDottedLineRegular;
