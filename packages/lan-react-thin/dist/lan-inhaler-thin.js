import React from 'react';

export function LanInhalerThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M423.1 34.4c6.5-20.2 27.6-31.8 48.2-26.5l122.4 31.9c22 5.7 34.8 28.7 28.1 50.5L514.1 440.5c-7.3 23.5-29 39.5-53.5 39.5H264c-22.1 0-40-17.9-40-40V264c0-22.1 17.9-40 40-40h98.2l61-189.6zm44.1-11c-12.3-3.2-25 3.8-28.9 15.9L412 121.1l.9.7 146.6 116.6 47-152.7c4-13.1-3.7-26.8-16.9-30.3l-122.3-32zm87.2 231.3L406.8 137.3l-31.2 97.1c-1.1 3.3-4.1 5.6-7.6 5.6H264c-13.3 0-24 10.7-24 24v176c0 13.3 10.7 24 24 24h196.5c17.6 0 33.1-11.5 38.2-28.2l55.7-181zM32 336a16 16 0 1 1 0 32 16 16 0 1 1 0-32m16 112a16 16 0 1 1-32 0 16 16 0 1 1 32 0m80-160a16 16 0 1 1 0 32 16 16 0 1 1 0-32m-80-32a16 16 0 1 1-32 0 16 16 0 1 1 32 0m80 128a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
  );
}

export default LanInhalerThin;
