import React from 'react';

export function LanGridRound2Solid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 32a96 96 0 1 0 0 192 96 96 0 1 0 0-192m0 256a96 96 0 1 0 0 192 96 96 0 1 0 0-192m160-160a96 96 0 1 0 192 0 96 96 0 1 0-192 0m96 160a96 96 0 1 0 0 192 96 96 0 1 0 0-192"})
  );
}

export default LanGridRound2Solid;
