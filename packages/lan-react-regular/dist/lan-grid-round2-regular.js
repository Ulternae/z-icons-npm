import React from 'react';

export function LanGridRound2Regular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 176a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0M96 432a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0m112-256a48 48 0 1 0 96 0 48 48 0 1 0-96 0m48 96a96 96 0 1 1 0-192 96 96 0 1 1 0 192m0 208a48 48 0 1 0 0-96 48 48 0 1 0 0 96m96-48a96 96 0 1 1-192 0 96 96 0 1 1 192 0"})
  );
}

export default LanGridRound2Regular;
