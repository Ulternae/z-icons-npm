import React from 'react';

export function LanCircleLitecoinSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-40-384c13.3 0 24 10.7 24 24v60.5l58.9-19.6c8.4-2.8 17.4 1.7 20.2 10.1s-1.7 17.4-10.1 20.2l-69.1 23V336h88c13.3 0 24 10.7 24 24s-10.7 24-24 24h-112c-13.3 0-24-10.7-24-24v-97.8l-26.9 9c-8.4 2.8-17.4-1.7-20.2-10.1s1.7-17.4 10.1-20.2l37.1-12.4V152c0-13.3 10.7-24 24-24"})
  );
}

export default LanCircleLitecoinSolid;
