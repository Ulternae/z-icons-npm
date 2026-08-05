import React from 'react';

export function Lan5Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 56c0-13.3 10.7-24 24-24h240c13.3 0 24 10.7 24 24s-10.7 24-24 24H48v128h136c75.1 0 136 60.9 136 136s-60.9 136-136 136H24c-13.3 0-24-10.7-24-24s10.7-24 24-24h160c48.6 0 88-39.4 88-88s-39.4-88-88-88H24c-13.3 0-24-10.7-24-24z"})
  );
}

export default Lan5Regular;
