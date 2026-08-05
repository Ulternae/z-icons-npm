import React from 'react';

export function MinaPercentageCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0M9.854 9.854 9.5 9.5m5.004 5.004-.354-.354m-4.65.35 5-5"})
  );
}

export default MinaPercentageCircle;
