import React from 'react';

export const LanGamepadSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 64c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256S86 64 192 64zM192 176c-13.3 0-24 10.7-24 24v32h-32c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v32c0 13.3 10.7 24 24 24s24-10.7 24-24v-32h32c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32v-32c0-13.3-10.7-24-24-24m240 96a32 32 0 1 0 0 64 32 32 0 1 0 0-64m64-96a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanGamepadSolid;
