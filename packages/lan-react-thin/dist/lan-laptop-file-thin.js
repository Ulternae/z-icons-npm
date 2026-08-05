import React from 'react';

export function LanLaptopFileThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 64c0-26.5 21.5-48 48-48h288c26.5 0 48 21.5 48 48v48h16V64c0-35.3-28.7-64-64-64H128C92.7 0 64 28.7 64 64v192H19.2C8.6 256 0 264.6 0 275.2 0 317.6 34.4 352 76.8 352H240v-16H76.8C43.2 336 16 308.8 16 275.2c0-1.8 1.4-3.2 3.2-3.2H240v-16H80zm448 400c0 17.7-14.3 32-32 32H336c-17.7 0-32-14.3-32-32V208c0-17.7 14.3-32 32-32h76.1c1.3 0 2.6.1 3.9.2V240c0 26.5 21.5 48 48 48h63.8c.2 1.3.2 2.6.2 3.9zm-96-281.1q1.5 1.2 2.7 2.4l83.9 83.9q1.35 1.35 2.4 2.7l-57 .1c-17.7 0-32-14.3-32-32zM336 160c-26.5 0-48 21.5-48 48v256c0 26.5 21.5 48 48 48h160c26.5 0 48-21.5 48-48V291.9c0-12.7-5.1-24.9-14.1-33.9L446 174.1c-9-9-21.2-14.1-33.9-14.1z"})
  );
}

export default LanLaptopFileThin;
