import React from 'react';

export function LanA({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M206.7 41.8c-2.5-5.9-8.3-9.8-14.7-9.8s-12.2 3.8-14.7 9.8l-176 416c-3.4 8.1.4 17.5 8.5 21s17.5-.4 21-8.5l36.5-86.2h249.6l36.5 86.2c3.4 8.1 12.8 11.9 21 8.5s11.9-12.8 8.5-21l-176-416zM303.2 352H80.8L192 89.1z"})
  );
}

export default LanA;
