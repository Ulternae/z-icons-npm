import React from 'react';

export function LanMoneySimpleFromBracketThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M72 16c-30.9 0-56 25.1-56 56v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V72C0 32.2 32.2 0 72 0h432c39.8 0 72 32.2 72 72v80c0 4.4-3.6 8-8 8s-8-3.6-8-8V72c0-30.9-25.1-56-56-56zm392 432V80h16v368c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64V80h16v368c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48M288 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160m0-176a96 96 0 1 1 0 192 96 96 0 1 1 0-192"})
  );
}

export default LanMoneySimpleFromBracketThin;
