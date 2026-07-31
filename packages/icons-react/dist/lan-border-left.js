import React from 'react';

export const LanBorderLeft = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 480c-8.8 0-16-7.2-16-16V48c0-8.8 7.2-16 16-16s16 7.2 16 16v416c0 8.8-7.2 16-16 16m144-56a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-336a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-336a24 24 0 1 1 0-48 24 24 0 1 1 0 48m128 336a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-336a24 24 0 1 1 0-48 24 24 0 1 1 0 48m0 208a24 24 0 1 1 0 48 24 24 0 1 1 0-48m0-80a24 24 0 1 1 0-48 24 24 0 1 1 0 48"})
);

export default LanBorderLeft;
