import React from 'react';

export function LanAngleUpRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M175.5 143c9.4-9.4 24.6-9.4 33.9 0l160 160c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-143-143-143 143c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l160-160z"})
  );
}

export default LanAngleUpRegular;
