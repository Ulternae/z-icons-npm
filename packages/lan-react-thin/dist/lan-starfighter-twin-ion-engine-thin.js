import React from 'react';

export function LanStarfighterTwinIonEngineThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 40c0-4.4-3.6-8-8-8s-8 3.6-8 8v432c0 4.4 3.6 8 8 8s8-3.6 8-8V298.1l93.1 21.5C133.7 376.3 190.2 416 256 416s122.3-39.7 146.9-96.5l93.1-21.4V472c0 4.4 3.6 8 8 8s8-3.6 8-8V40c0-4.4-3.6-8-8-8s-8 3.6-8 8v173.9l-93.1-21.5C378.3 135.7 321.8 96 256 96s-122.3 39.7-146.9 96.5L16 213.9zm393.4 170.4 86.6 20v51.3l-86.6 20c4.3-14.5 6.6-29.8 6.6-45.6s-2.3-31.2-6.6-45.6zm-306.8 91.2-86.6-20v-51.3l86.6-20C98.3 224.8 96 240.2 96 256s2.3 31.2 6.6 45.6M256 112a144 144 0 1 1 0 288 144 144 0 1 1 0-288m0 224a80 80 0 1 0 0-160 80 80 0 1 0 0 160m-64-80a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
  );
}

export default LanStarfighterTwinIonEngineThin;
