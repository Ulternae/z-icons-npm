import React from 'react';

export function LanColonRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M120 128a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-96 0a72 72 0 1 1 144 0 72 72 0 1 1-144 0m96 256c0-13.3-10.7-24-24-24s-24 10.7-24 24 10.7 24 24 24 24-10.7 24-24m48 0c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72"})
  );
}

export default LanColonRegular;
