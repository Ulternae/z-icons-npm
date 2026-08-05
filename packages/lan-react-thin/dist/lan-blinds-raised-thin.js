import React from 'react';

export function LanBlindsRaisedThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 48c-8.8 0-16 7.2-16 16s7.2 16 16 16h384c8.8 0 16-7.2 16-16s-7.2-16-16-16zM0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32s-14.3 32-32 32H144v376c0 4.4-3.6 8-8 8s-8-3.6-8-8V96H32C14.3 96 0 81.7 0 64m32 112c-8.8 0-16 7.2-16 16s7.2 16 16 16h48v16H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h48v16zm384 32c8.8 0 16-7.2 16-16s-7.2-16-16-16H192v-16h224c17.7 0 32 14.3 32 32s-14.3 32-32 32H192v-16z"})
  );
}

export default LanBlindsRaisedThin;
