import React from 'react';

export function LanLightCeiling({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256.2 0c8.8 0 16 7.2 16 16v144.5c123.3 7.6 223 102.5 238 223.6 2.2 17.5-12.4 31.9-30 31.9H357.4c-18 37.8-56.5 64-101.2 64S173 453.8 155 416H32.2c-17.7 0-32.2-14.4-30-31.9 15.1-121.1 114.7-216 238-223.6V16c0-8.8 7.2-16 16-16m-68.9 416c15.2 21.8 40.4 36 68.9 36s53.8-14.2 68.9-36H187.2zM34.5 384H478c-15.5-108.5-108.9-192-221.8-192S50 275.5 34.5 384"})
  );
}

export default LanLightCeiling;
