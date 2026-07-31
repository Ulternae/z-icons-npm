import React from 'react';

export const LanBinSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M32 64C14.3 64 0 78.3 0 96s14.3 32 32 32h2.9l23.8 261.8c3 33 30.6 58.2 63.7 58.2h331.1c33.1 0 60.7-25.2 63.7-58.2L541 128h2.9c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
);

export default LanBinSolid;
