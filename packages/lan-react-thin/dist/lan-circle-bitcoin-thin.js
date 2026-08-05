import React from 'react';

export function LanCircleBitcoinThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 16a240 240 0 1 1 0 480 240 240 0 1 1 0-480m0 496a256 256 0 1 0 0-512 256 256 0 1 0 0 512M216 96c-4.4 0-8 3.6-8 8v24h-32c-7.9 0-14.2 6.4-14.2 14.2v226.3c0 8.5 6.9 15.5 15.5 15.5h30.8v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h48v24c0 4.4 3.6 8 8 8s8-3.6 8-8v-24h18.2c37.6 0 68-30.4 68-68 0-29.8-19.2-55.2-45.9-64.3 17.5-12.3 28.9-32.6 28.9-55.7 0-37.6-30.4-68-68-68H288v-24c0-4.4-3.6-8-8-8s-8 3.6-8 8v24h-48v-24c0-4.4-3.6-8-8-8m90.2 272H177.7V264h128.5c28.7 0 52 23.3 52 52s-23.3 52-52 52M216 144h73.3c28.7 0 52 23.3 52 52s-23.3 52-52 52H177.8V144z"})
  );
}

export default LanCircleBitcoinThin;
