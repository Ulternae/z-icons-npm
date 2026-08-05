import React from 'react';

export function LanSlidersSimpleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 384a32 32 0 1 1 0-64 32 32 0 1 1 0 64m90.5-64c-13.2-37.3-48.7-64-90.5-64-53 0-96 43-96 96s43 96 96 96c41.8 0 77.4-26.7 90.5-64H480c17.7 0 32-14.3 32-32s-14.3-32-32-32zM448 160a32 32 0 1 1-64 0 32 32 0 1 1 64 0m-122.5-32H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h293.5c13.2 37.3 48.7 64 90.5 64 53 0 96-43 96-96s-43-96-96-96c-41.8 0-77.4 26.7-90.5 64"})
  );
}

export default LanSlidersSimpleSolid;
