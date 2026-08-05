import React from 'react';

export function LanDittoThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 103.9c0 4.2.5 8.3 1.4 12.4L50.3 261c1.5 6.4 7.1 11 13.7 11s12.3-4.5 13.7-11l32.9-144.7c.9-4.1 1.4-8.2 1.4-12.4V96c0-26.5-21.5-48-48-48S16 69.5 16 96zm-16 0V96c0-35.3 28.7-64 64-64s64 28.7 64 64v7.9q0 8.1-1.8 15.9L93.3 264.6C90.2 278.3 78 288 64 288s-26.2-9.7-29.3-23.4L1.8 119.9c-1.2-5.3-1.8-10.6-1.8-16m208 0c0 4.2.5 8.3 1.4 12.4L242.3 261c1.5 6.4 7.1 11 13.7 11s12.3-4.5 13.7-11l32.9-144.7c.9-4.1 1.4-8.2 1.4-12.4V96c0-26.5-21.5-48-48-48s-48 21.5-48 48zm-16 0V96c0-35.3 28.7-64 64-64s64 28.7 64 64v7.9q0 8.1-1.8 15.9l-32.9 144.8C282.2 278.3 270 288 256 288s-26.2-9.7-29.3-23.4l-32.9-144.7c-1.2-5.2-1.8-10.6-1.8-15.9z"})
  );
}

export default LanDittoThin;
