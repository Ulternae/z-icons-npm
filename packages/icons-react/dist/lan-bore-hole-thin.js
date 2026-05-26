import React from 'react';

export const LanBoreHoleThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M256 24c-4.4 0-8 3.6-8 8v208.5c-31.6 3.9-56 30.9-56 63.5 0 35.3 28.7 64 64 64s64-28.7 64-64c0-32.6-24.4-59.6-56-63.5V32c0-4.4-3.6-8-8-8m0 328a48 48 0 1 1 0-96 48 48 0 1 1 0 96M48 144h48c17.7 0 32 14.3 32 32v128c0 70.7 57.3 128 128 128s128-57.3 128-128V176c0-17.7 14.3-32 32-32h48c17.7 0 32 14.3 32 32v272c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V176c0-17.7 14.3-32 32-32m0-16c-26.5 0-48 21.5-48 48v272c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64V176c0-26.5-21.5-48-48-48h-48c-26.5 0-48 21.5-48 48v128c0 61.9-50.1 112-112 112s-112-50.1-112-112V176c0-26.5-21.5-48-48-48z"})
);

export default LanBoreHoleThin;
