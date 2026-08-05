import React from 'react';

export function LanSquareSwedishKronaRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm120 32c13.3 0 24 10.7 24 24v102.1l55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-37.8 37.8 41.9 77.9c6.3 11.7 1.9 26.2-9.8 32.5s-26.2 1.9-32.5-9.8l-35.1-65.2-15.8 15.8v38.1c0 13.3-10.7 24-24 24s-24-10.7-24-24v-208c0-13.3 10.7-24 24-24zm182.2 79c10.1-4.6 21.1-7 32.4-7h9.4c13.3 0 24 10.7 24 24s-10.7 24-24 24h-9.4c-8.1 0-15.9 3.2-21.7 9s-9 13.5-9 21.7v81.4c0 13.3-10.7 24-24 24s-24-10.7-24-24v-144c0-13.3 10.7-24 24-24 10.1 0 18.7 6.2 22.2 15z"})
  );
}

export default LanSquareSwedishKronaRegular;
