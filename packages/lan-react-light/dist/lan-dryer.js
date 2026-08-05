import React from 'react';

export function LanDryer({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 32c17.7 0 32 14.3 32 32v384c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm56 96a24 24 0 1 0-48 0 24 24 0 1 0 48 0m72 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48m32 296c-56.4 0-103.1-41.7-110.9-96H176c8.8 0 16-7.2 16-16s-7.2-16-16-16h-62.9c7.8-54.3 54.4-96 110.9-96 61.9 0 112 50.1 112 112s-50.1 112-112 112M80 304a144 144 0 1 0 288 0 144 144 0 1 0-288 0"})
  );
}

export default LanDryer;
