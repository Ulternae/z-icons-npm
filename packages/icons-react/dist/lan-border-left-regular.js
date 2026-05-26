import React from 'react';

export const LanBorderLeftRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M24 480c-13.3 0-24-10.7-24-24V56c0-13.3 10.7-24 24-24s24 10.7 24 24v400c0 13.3-10.7 24-24 24m136-64a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-320a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128 384c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m0-384a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128 384c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32m0-384a32 32 0 1 1 0-64 32 32 0 1 1 0 64m0 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0-64a32 32 0 1 1 0-64 32 32 0 1 1 0 64"})
);

export default LanBorderLeftRegular;
