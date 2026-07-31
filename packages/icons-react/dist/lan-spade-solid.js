import React from 'react';

export const LanSpadeSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M220.6 14.9C230.1 5.3 243 0 256.5 0s26.4 5.3 35.9 14.9L475 197.5c50 50 50 131 0 181s-131 50-181 0l-5.5-5.5v75h32c17.7 0 32 14.3 32 32s-14.3 32-32 32h-128c-17.7 0-32-14.3-32-32s14.3-32 32-32h32v-75l-5.5 5.5c-50 50-131 50-181 0s-50-131 0-181z"})
);

export default LanSpadeSolid;
