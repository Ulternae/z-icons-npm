import React from 'react';

export function LanBellPlusSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 0c-17.7 0-32 14.3-32 32v3.2C119 50 64 114.6 64 192v21.7c0 48.1-16.4 94.8-46.4 132.4l-9.8 12.2C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416h376.9c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2c-29.9-37.6-46.3-84.3-46.3-132.4V192c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32m-62 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48zm62-336c13.3 0 24 10.7 24 24v48h48c13.3 0 24 10.7 24 24s-10.7 24-24 24h-48v48c0 13.3-10.7 24-24 24s-24-10.7-24-24v-48h-48c-13.3 0-24-10.7-24-24s10.7-24 24-24h48v-48c0-13.3 10.7-24 24-24"})
  );
}

export default LanBellPlusSolid;
