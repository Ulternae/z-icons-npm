import React from 'react';

export function LanFloppyDisksSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M96 64c0-35.3 28.7-64 64-64h207.4c17 0 33.3 6.7 45.3 18.7l80.6 80.6c12 12 18.7 28.3 18.7 45.3V352c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64zm-48 56v328c0 8.8 7.2 16 16 16h328c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64V120c0-13.3 10.7-24 24-24s24 10.7 24 24m312 160a56 56 0 1 0-112 0 56 56 0 1 0 112 0M224 64c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32z"})
  );
}

export default LanFloppyDisksSolid;
