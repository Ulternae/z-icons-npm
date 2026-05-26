import React from 'react';

export const LanBlindsRaisedSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M32 32C14.3 32 0 46.3 0 64s14.3 32 32 32h80v360c0 13.3 10.7 24 24 24s24-10.7 24-24V96h256c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 176h32v-64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32m384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32H208v64z"})
);

export default LanBlindsRaisedSolid;
