import React from 'react';

export function LanHouseTurretThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M296 16h56v72c0 4.4 3.6 8 8 8s8-3.6 8-8V16h96v72c0 4.4 3.6 8 8 8s8-3.6 8-8V16h56c13.3 0 24 10.7 24 24v416c0 22.1-17.9 40-40 40h-96c-2.3 5.6-5.1 10.9-8.4 16H520c30.9 0 56-25.1 56-56V40c0-22.1-17.9-40-40-40H296c-22.1 0-40 17.9-40 40v31.2l16 13.4V40c0-13.3 10.7-24 24-24m-82.8 81.9c-3-2.5-7.3-2.5-10.3 0l-200 168c-3.4 2.8-3.8 7.9-1 11.3s7.9 3.8 11.3 1L32 262.3V456c0 30.9 25.1 56 56 56h240c30.9 0 56-25.1 56-56V262.3l18.9 15.8c3.4 2.8 8.4 2.4 11.3-1s2.4-8.4-1-11.3l-200-168zM368 248.8V456c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V248.8l160-134.4zM232 288c4.4 0 8 3.6 8 8v48c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8v-48c0-4.4 3.6-8 8-8zm-48-16c-13.3 0-24 10.7-24 24v48c0 13.3 10.7 24 24 24h48c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24z"})
  );
}

export default LanHouseTurretThin;
