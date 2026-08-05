import React from 'react';

export function LanHouseCrack({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M245.6 4.3c6.1-5.7 15.7-5.7 21.8 0l240 224c6.5 6 6.8 16.2.8 22.6s-16.2 6.8-22.6.8L464.5 232v216c0 35.3-28.7 64-64 64h-288c-35.3 0-64-28.7-64-64V232l-21.1 19.7c-6.5 6-16.6 5.7-22.6-.8s-5.7-16.6.8-22.6zm10.9 33.6-176 164.3V448c0 17.7 14.3 32 32 32h130.1l-47.4-71.1c-4.9-7.4-2.9-17.3 4.4-22.2l79.8-53.2-82.2-82.2c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l96 96c3.4 3.4 5.1 8.1 4.6 12.9s-3.1 9.1-7 11.7l-82.7 55.1 50.4 75.6h119.4c17.7 0 32-14.3 32-32V202.2z"})
  );
}

export default LanHouseCrack;
