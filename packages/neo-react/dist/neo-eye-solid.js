import React from 'react';

export function NeoEyeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 616 560',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M252 252c21.2 0 39.6-11.8 49.2-29.1 7.4-13.6 19.7-27.3 34.3-22.2 32.9 11.4 56.5 42.6 56.5 79.4 0 46.4-37.6 84-84 84s-84-37.6-84-84c0-3.7.2-7.4.7-11 1.6-12.1 15.1-17 27.3-17zM15.9 216C46.6 165.5 138.8 42 308 42s261.4 123.5 292.1 174c11.7 19.2 15.9 40.6 15.9 60.6v6.8c0 20-4.2 41.4-15.9 60.6-30.7 50.5-122.9 174-292.1 174S46.6 394.5 15.9 344C4.2 324.8 0 303.4 0 283.4v-6.8c0-20 4.2-41.4 15.9-60.6M448 280a140 140 0 1 0-280 0 140 140 0 1 0 280 0"})
  );
}

export default NeoEyeSolid;
