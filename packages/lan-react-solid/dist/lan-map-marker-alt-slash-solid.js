import React from 'react';

export function LanMapMarkerAltSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L422.6 356.8c32.2-53.9 57.4-113.5 57.4-168.2C480 84.4 394.1 0 288 0c-61 0-115.4 28-150.6 71.6zm189.2 189.3c10.3-21.5 32.3-36.4 57.8-36.4 35.3 0 64 28.7 64 64 0 25.5-14.9 47.4-36.4 57.8zm-133 2.7c-.8 7.1-1.2 14.2-1.2 21.5 0 119.3 120.2 262.3 170.4 316.8 11.8 12.8 31.5 12.8 43.3 0 14.8-16 35.6-39.7 57.7-68.2L97.3 167.1z"})
  );
}

export default LanMapMarkerAltSlashSolid;
