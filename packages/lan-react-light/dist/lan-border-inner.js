import React from 'react';

export function LanBorderInner({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 480c-8.8 0-16-7.2-16-16V272H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h192V48c0-8.8 7.2-16 16-16s16 7.2 16 16v192h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H240v192c0 8.8-7.2 16-16 16M32 424a24 24 0 1 1 0 48 24 24 0 1 1 0-48m384 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48M32 328a24 24 0 1 1 0 48 24 24 0 1 1 0-48m384 0a24 24 0 1 1 0 48 24 24 0 1 1 0-48m-24-168a24 24 0 1 1 48 0 24 24 0 1 1-48 0M32 136a24 24 0 1 1 0 48 24 24 0 1 1 0-48m360-72a24 24 0 1 1 48 0 24 24 0 1 1-48 0M8 64a24 24 0 1 1 48 0 24 24 0 1 1-48 0m288 0a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 360a24 24 0 1 1 0 48 24 24 0 1 1 0-48M104 64a24 24 0 1 1 48 0 24 24 0 1 1-48 0m24 360a24 24 0 1 1 0 48 24 24 0 1 1 0-48"})
  );
}

export default LanBorderInner;
