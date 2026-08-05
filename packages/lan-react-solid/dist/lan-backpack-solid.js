import React from 'react';

export function LanBackpackSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M184 48h80c4.4 0 8 3.6 8 8v40h-96V56c0-4.4 3.6-8 8-8m-56 8v40C57.3 96 0 153.3 0 224v224c0 35.3 28.7 64 64 64h16V376c0-39.8 32.2-72 72-72h144c39.8 0 72 32.2 72 72v136h16c35.3 0 64-28.7 64-64V224c0-70.7-57.3-128-128-128V56c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56m192 456V376c0-13.3-10.7-24-24-24H152c-13.3 0-24 10.7-24 24v136zM152 176h144c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
  );
}

export default LanBackpackSolid;
