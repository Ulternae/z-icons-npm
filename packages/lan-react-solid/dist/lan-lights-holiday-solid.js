import React from 'react';

export function LanLightsHolidaySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 96c-17.7 0-32 14.3-32 32s14.3 32 32 32h32v86.7C35.7 259 16 287.2 16 320c0 48 56 128 80 128s80-80 80-128c0-32.8-19.7-61-48-73.3V160h128v86.7c-28.3 12.3-48 40.5-48 73.3 0 48 56 128 80 128s80-80 80-128c0-32.8-19.7-61-48-73.3V160h128v86.7c-28.3 12.3-48 40.5-48 73.3 0 48 56 128 80 128s80-80 80-128c0-32.8-19.7-61-48-73.3V160h32c17.7 0 32-14.3 32-32s-14.3-32-32-32z"})
  );
}

export default LanLightsHolidaySolid;
