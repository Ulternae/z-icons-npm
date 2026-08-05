import React from 'react';

export function LanGridRound2Thin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 208a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0M96 464a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0m80-256a80 80 0 1 0 160 0 80 80 0 1 0-160 0m80 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 240a80 80 0 1 0 0-160 80 80 0 1 0 0 160m96-80a96 96 0 1 1-192 0 96 96 0 1 1 192 0"})
  );
}

export default LanGridRound2Thin;
