import React from 'react';

export function LanTildeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M114.5 176C77.8 176 48 205.8 48 242.5V328c0 13.3-10.7 24-24 24S0 341.3 0 328v-85.5C0 179.3 51.3 128 114.5 128c30.4 0 59.5 12.1 81 33.5l155 155c12.5 12.5 29.4 19.5 47 19.5 36.7 0 66.5-29.8 66.5-66.5V184c0-13.3 10.7-24 24-24s24 10.7 24 24v85.5c0 63.2-51.3 114.5-114.5 114.5-30.4 0-59.5-12.1-81-33.5l-155-155C149 183 132.1 176 114.5 176"})
  );
}

export default LanTildeRegular;
