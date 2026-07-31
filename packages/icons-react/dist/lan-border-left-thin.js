import React from 'react';

export const LanBorderLeftThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8m120 400a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-96 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 160a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0 128a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0-224a16 16 0 1 0 0 32 16 16 0 1 0 0-32"})
);

export default LanBorderLeftThin;
