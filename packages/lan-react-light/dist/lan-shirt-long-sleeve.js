import React from 'react';

export function LanShirtLongSleeve({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M139.1 0C96.9 0 59.7 27.5 47.3 67.8L3.5 210.1C1.2 217.7 0 225.6 0 233.6V416c0 17.7 14.3 32 32 32h64v16c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48v-16h64c17.7 0 32-14.3 32-32V233.6c0-8-1.2-15.9-3.5-23.5L464.7 67.8C452.3 27.5 415.1 0 372.9 0zM96 216v200H32V233.6q0-7.2 2.1-14.1L77.9 77.2C86.2 50.3 111 32 139.1 32H160c0 53 43 96 96 96s96-43 96-96h20.9c28.1 0 52.9 18.3 61.2 45.2l43.8 142.3q2.1 6.9 2.1 14.1V416h-64V216c0-8.8-7.2-16-16-16s-16 7.2-16 16v248c0 8.8-7.2 16-16 16H144c-8.8 0-16-7.2-16-16V216c0-8.8-7.2-16-16-16s-16 7.2-16 16M320 32c0 35.3-28.7 64-64 64s-64-28.7-64-64z"})
  );
}

export default LanShirtLongSleeve;
