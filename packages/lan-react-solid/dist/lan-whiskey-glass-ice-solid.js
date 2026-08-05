import React from 'react';

export function LanWhiskeyGlassIceSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 64c0-17.7 14.3-32 32-32h384c17.7 0 32 14.3 32 32v288c0 70.7-57.3 128-128 128H128C57.3 480 0 422.7 0 352zm64 160h43.5c-3.7 12.6-4.1 26.3-.5 39.9l19.9 74.2c10.5 39.3 50.9 62.6 90.1 52l74.2-19.9c39.3-10.5 62.6-50.9 52-90.1l-15-56.1H384V96H64zm213-5.7 19.9 74.2c3.7 13.7-4.4 27.7-18.1 31.4l-74.2 19.9c-13.7 3.7-27.7-4.4-31.4-18.1l-19.9-74.2c-3.7-13.7 4.4-27.7 18.1-31.4l74.2-19.9c13.7-3.7 27.7 4.4 31.4 18.1"})
  );
}

export default LanWhiskeyGlassIceSolid;
