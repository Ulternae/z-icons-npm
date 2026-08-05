import React from 'react';

export function LanTrainStopSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 0c61.9 0 112 50.1 112 112 0 50.7-33.7 93.5-80 107.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V219.3c-46.3-13.8-80-56.6-80-107.3C400 50.1 450.1 0 512 0M272 64c44.2 0 80 35.8 80 80v192c0 36.9-25 67.8-59 77.1l21.9 28.2c8.1 10.5 6.3 25.5-4.2 33.7-10.5 8.1-25.5 6.3-33.7-4.2l-42.6-54.7h-84.9l-42.6 54.7c-8.1 10.5-23.2 12.3-33.7 4.2s-12.3-23.2-4.2-33.7l21.9-28.2C57 403.8 32 372.9 32 336V144c0-44.2 35.8-80 80-80zm-80 240a24 24 0 1 0 0 48 24 24 0 1 0 0-48m-72-176c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24z"})
  );
}

export default LanTrainStopSolid;
