import React from 'react';

export function LanMicrowaveSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 128c0-35.3 28.7-64 64-64h448c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64 0 17.7-14.3 32-32 32s-32-14.3-32-32H128c0 17.7-14.3 32-32 32s-32-14.3-32-32c-35.3 0-64-28.7-64-64zm96 56v144c0 13.3 10.7 24 24 24h240c13.3 0 24-10.7 24-24V184c0-13.3-10.7-24-24-24H120c-13.3 0-24 10.7-24 24m392-24c-13.3 0-24 10.7-24 24v144c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24"})
  );
}

export default LanMicrowaveSolid;
