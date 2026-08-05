import React from 'react';

export function LanCircleHouse({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-16-160v-64h32v64zm-32 0h-24c-13.3 0-24-10.7-24-24V206.9l96-74.7 96 74.7V328c0 13.3-10.7 24-24 24h-24v-64c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32zm-80-120.2V328c0 30.9 25.1 56 56 56h144c30.9 0 56-25.1 56-56v-96.2l6.2 4.8c7 5.4 17 4.2 22.5-2.8s4.2-17-2.8-22.5l-144-112c-5.8-4.5-13.9-4.5-19.6 0l-144 112c-7 5.4-8.2 15.5-2.8 22.5s15.5 8.2 22.5 2.8l6.2-4.8z"})
  );
}

export default LanCircleHouse;
