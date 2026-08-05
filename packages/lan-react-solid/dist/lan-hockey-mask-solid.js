import React from 'react';

export function LanHockeyMaskSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 240C0 111 64 0 224 0s224 111 224 240c0 192-48 272-224 272S0 432 0 240m160-136a24 24 0 1 0 0-48 24 24 0 1 0 0 48m88 24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-72 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48m0 64a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72-104a24 24 0 1 0 0-48 24 24 0 1 0 0 48m40-264a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-40 328a24 24 0 1 0 0-48 24 24 0 1 0 0 48m24 40a24 24 0 1 0-48 0 24 24 0 1 0 48 0M128 272c35.3 0 64-28.7 64-64 0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32 0 35.3 28.7 64 64 64m256-64c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32 0 35.3 28.7 64 64 64s64-28.7 64-64"})
  );
}

export default LanHockeyMaskSolid;
