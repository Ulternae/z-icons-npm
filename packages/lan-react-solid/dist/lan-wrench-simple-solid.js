import React from 'react';

export function LanWrenchSimpleSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m132.7 164.7 48 48c6.2 6.2 16.4 6.2 22.6 0l48-48c3-3 4.7-7.1 4.7-11.3V17.6c0-11 10.9-18.7 20.8-13.8C340.3 35.1 384 100.5 384 176.1c0 71.1-38.6 133.1-96 166.3V464c0 26.5-21.5 48-48 48h-96c-26.5 0-48-21.5-48-48V342.3C38.6 309.1 0 247.1 0 176 0 100.4 43.7 35 107.2 3.7c9.9-4.9 20.8 2.8 20.8 13.9v135.8c0 4.2 1.7 8.3 4.7 11.3"})
  );
}

export default LanWrenchSimpleSolid;
