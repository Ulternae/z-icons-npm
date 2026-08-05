import React from 'react';

export function LanGolfClub({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.995 576.495 543.995',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M546.5-23.7c4.2-7.7 14-10.6 21.7-6.3s10.6 14 6.3 21.7l-266.3 487C297 499.2 275.4 512 252 512H80.5c-26.5 0-48-21.5-48-48V327.4c0-30.5 28-53.2 57.9-47l259.8 54.8zM83.8 311.8c-9.9-2.1-19.3 5.5-19.3 15.7v24.6h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v32h48c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v16c0 8.8 7.2 16 16 16L252 480c11.7 0 22.5-6.4 28.1-16.6l54.1-98.9z"})
  );
}

export default LanGolfClub;
