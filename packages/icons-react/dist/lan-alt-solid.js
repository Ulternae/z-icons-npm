import React from 'react';

export const LanAltSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 64c-9.7 0-18.9 4.4-25 12L176.6 384H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c9.7 0 18.9-4.4 25-12l246.4-308H608c17.7 0 32-14.3 32-32s-14.3-32-32-32zm0 320c-17.7 0-32 14.3-32 32s14.3 32 32 32h160c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
);

export default LanAltSolid;
