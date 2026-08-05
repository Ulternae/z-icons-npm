import React from 'react';

export function LanSteeringWheel({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 480c-10.9 0-21.5-.8-32-2.3V456c0-92.8-75.2-168-168-168H34.3c-2.6-17.8-4.4-46.5 2.9-80h437.7c7.3 33.5 5.4 62.2 2.9 80H456c-92.8 0-168 75.2-168 168v21.7c-10.5 1.5-21.1 2.3-32 2.3m214.7-160c-21.5 72.2-78.5 129.2-150.7 150.7V456c0-75.1 60.9-136 136-136zm-424-144C78.9 91.8 160.5 32 256 32s177.1 59.8 209.3 144zM192 470.7C119.8 449.2 62.8 392.2 41.3 320H56c75.1 0 136 60.9 136 136zm64 41.3a256 256 0 1 0 0-512 256 256 0 1 0 0 512m16-216a16 16 0 1 1-32 0 16 16 0 1 1 32 0m-16-48a48 48 0 1 0 0 96 48 48 0 1 0 0-96"})
  );
}

export default LanSteeringWheel;
