import React from 'react';

export function LanHouseWindowSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272h16v176c0 35.3 28.7 64 64 64h288c35.3 0 64-28.7 64-64V272h16c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1zM216 224h80c13.3 0 24 10.7 24 24v80c0 13.3-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24v-80c0-13.3 10.7-24 24-24"})
  );
}

export default LanHouseWindowSolid;
