import React from 'react';

export function LanLocationArrow({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208.8 282.9c9.6 3.2 17.1 10.7 20.2 20.2L288 480 448 64 32 224zM20.5 194.1l416-160c11.8-4.5 25.2-1.7 34.1 7.2s11.8 22.3 7.2 34.1l-160 416c-4.8 12.6-17.1 20.8-30.6 20.5s-25.4-9.1-29.6-21.9l-58.9-176.7-176.8-58.9C9.1 250.1.3 238.2 0 224.7s7.9-25.7 20.5-30.6"})
  );
}

export default LanLocationArrow;
