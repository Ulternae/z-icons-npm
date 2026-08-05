import React from 'react';

export function NeoThumbtackSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 560 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384.3 8.2c-10.9-10.9-28.7-10.9-39.6 0s-10.9 28.7 0 39.6l5.2 5.2-75.5 56.6-90.1-22.5C173 84.3 161.7 84 150.2 84c-51.7 0-93.7 41.9-93.7 93.7 0 17.1 4.7 34.4 14.8 49.4 17.9 26.3 58 81.4 119.4 142.7s116.4 101.5 142.7 119.4c15 10.2 32.4 14.8 49.4 14.8 51.7 0 93.7-41.9 93.7-93.7 0-11.5-.3-22.8-3.1-34.1l-22.5-90.1 56.6-75.5 5.2 5.2c10.9 10.9 28.7 10.9 39.6 0s10.9-28.7 0-39.6zm-224 431.6c10.9-10.9 10.9-28.7 0-39.6s-28.7-10.9-39.6 0l-84 84c-10.9 10.9-10.9 28.7 0 39.6s28.7 10.9 39.6 0z"})
  );
}

export default NeoThumbtackSolid;
