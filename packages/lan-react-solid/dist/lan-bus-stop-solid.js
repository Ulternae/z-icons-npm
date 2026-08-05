import React from 'react';

export function LanBusStopSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M272 64c44.2 0 80 35.8 80 80v224c0 20.9-13.4 38.6-32 45.2V448c0 17.7-14.3 32-32 32s-32-14.3-32-32v-32H128v32c0 17.7-14.3 32-32 32s-32-14.3-32-32v-34.8c-18.6-6.6-32-24.3-32-45.2V144c0-44.2 35.8-80 80-80zM512 0c61.9 0 112 50.1 112 112 0 50.7-33.7 93.5-80 107.3V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V219.3c-46.3-13.8-80-56.6-80-107.3C400 50.1 450.1 0 512 0M120 304a24 24 0 1 0 0 48 24 24 0 1 0 0-48m144 0a24 24 0 1 0 0 48 24 24 0 1 0 0-48M120 128c-13.3 0-24 10.7-24 24v80c0 13.3 10.7 24 24 24h144c13.3 0 24-10.7 24-24v-80c0-13.3-10.7-24-24-24z"})
  );
}

export default LanBusStopSolid;
