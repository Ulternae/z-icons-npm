import React from 'react';

export function LanNfcMagnifyingGlassSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v116.1c-18.6-14.7-40.3-25.5-64-31.3V136c0-22.1-17.9-40-40-40H240c-22.1 0-40 17.9-40 40v78.4c-14.3 8.3-24 23.8-24 41.6 0 11.3 3.9 21.6 10.4 29.8-6.7 18.1-10.4 37.7-10.4 58.2 0 8.1.6 16.2 1.7 24H112V144h24c13.3 0 24-10.7 24-24s-10.7-24-24-24h-32c-22.1 0-40 17.9-40 40v240c0 22.1 17.9 40 40 40h88.2c12.1 25.5 30.5 47.5 53.2 64H64c-35.3 0-64-28.7-64-64zm336 48v32.2c-32.6 1.5-62.8 12.4-88 29.9V144zm8 272.1a72 72 0 1 0 0-144 72 72 0 1 0 0 144m0 48c-66.3 0-120-53.7-120-120s53.7-120 120-120 120 53.7 120 120c0 24.5-7.3 47.2-19.9 66.2l60.9 60.8c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-60.8-60.9c-19 12.6-41.7 19.9-66.2 19.9z"})
  );
}

export default LanNfcMagnifyingGlassSolid;
