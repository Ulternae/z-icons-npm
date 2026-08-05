import React from 'react';

export function LanRainbowHalfThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M456 48C230.7 48 48 230.7 48 456c0 13.3-10.7 24-24 24S0 469.3 0 456C0 204.2 204.2 0 456 0c13.3 0 24 10.7 24 24s-10.7 24-24 24m0 136c-150.2 0-272 121.8-272 272 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-176.7 143.3-320 320-320 13.3 0 24 10.7 24 24s-10.7 24-24 24M320 456c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6 82.4-184 184-184 13.3 0 24 10.7 24 24s-10.7 24-24 24c-75.1 0-136 60.9-136 136"})
  );
}

export default LanRainbowHalfThin;
