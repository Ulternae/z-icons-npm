import React from 'react';

export function LanCircleGfRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 256a208 208 0 1 0-416 0 208 208 0 1 0 416 0M0 256a256 256 0 1 1 512 0 256 256 0 1 1-512 0m184-128c39.8 0 72 32.2 72 72 0 13.3-10.7 24-24 24s-24-10.7-24-24-10.7-24-24-24-24 10.7-24 24v112c0 13.3 10.7 24 24 24s24-10.7 24-24v-8c-13.3 0-24-10.7-24-24s10.7-24 24-24h24c13.3 0 24 10.7 24 24v32c0 39.8-32.2 72-72 72s-72-32.2-72-72V200c0-39.8 32.2-72 72-72m104 24c0-13.3 10.7-24 24-24h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-40v64h24c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v72c0 13.3-10.7 24-24 24s-24-10.7-24-24z"})
  );
}

export default LanCircleGfRegular;
