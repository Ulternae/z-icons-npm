import React from 'react';

export function LanCircleBahtThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512m-8-408v24h-72c-7.9 0-14.2 6.4-14.2 14.2v226.3c0 8.5 6.9 15.5 15.5 15.5h70.8v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h42.2c37.6 0 68-30.4 68-68 0-29.8-19.2-55.2-45.9-64.3 17.5-12.3 28.9-32.6 28.9-55.7 0-37.6-30.4-68-68-68H264v-24c0-4.4-3.6-8-8-8s-8 3.6-8 8m-70.2 40H248v104h-70.2zm86.2 0h25.3c28.7 0 52 23.3 52 52s-23.3 52-52 52H264zm-86.2 120H248v104h-70.2zm86.2 0h42.2c28.7 0 52 23.3 52 52s-23.3 52-52 52H264z"})
  );
}

export default LanCircleBahtThin;
