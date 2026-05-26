import React from 'react';

export const LanGamepadRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M192 112c-79.5 0-144 64.5-144 144s64.5 144 144 144h256c79.5 0 144-64.5 144-144s-64.5-144-144-144zM0 256C0 150 86 64 192 64h256c106 0 192 86 192 192s-86 192-192 192H192C86 448 0 362 0 256m232-56v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32v32c0 13.3-10.7 24-24 24s-24-10.7-24-24v-32h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24h32v-32c0-13.3 10.7-24 24-24s24 10.7 24 24m168 72a32 32 0 1 1 0 64 32 32 0 1 1 0-64m32-64a32 32 0 1 1 64 0 32 32 0 1 1-64 0"})
);

export default LanGamepadRegular;
