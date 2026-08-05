import React from 'react';

export function LanCircle8({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448m0 480a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-64-296c0 13.8 5 26.4 13.2 36.1-12.9 10.3-21.2 26.1-21.2 43.9 0 30.9 25.1 56 56 56h32c30.9 0 56-25.1 56-56 0-17.8-8.3-33.6-21.2-43.9 8.2-9.8 13.2-22.4 13.2-36.1 0-30.9-25.1-56-56-56h-16c-30.9 0-56 25.1-56 56m96 0c0 13.3-10.7 24-24 24h-16c-13.3 0-24-10.7-24-24s10.7-24 24-24h16c13.3 0 24 10.7 24 24m-48 56h32c13.3 0 24 10.7 24 24s-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanCircle8;
