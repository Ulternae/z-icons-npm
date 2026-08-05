import React from 'react';

export function LanOven({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 32c35.3 0 64 28.7 64 64v96H32V96c0-35.3 28.7-64 64-64zm64 192v224c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V224zM96 0C43 0 0 43 0 96v352c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-53-43-96-96-96zm32 112a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m104-24a24 24 0 1 0-48 0 24 24 0 1 0 48 0m56 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48M96 304c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16s-7.2-16-16-16H112c-8.8 0-16 7.2-16 16"})
  );
}

export default LanOven;
