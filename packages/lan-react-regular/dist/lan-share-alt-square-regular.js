import React from 'react';

export function LanShareAltSquareRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm344 64c0 30.9-25.1 56-56 56-10.8 0-20.9-3.1-29.5-8.4l-75 40.9c.3 2.5.5 5 .5 7.5s-.2 5-.5 7.5l75 40.9c8.6-5.3 18.7-8.4 29.5-8.4 30.9 0 56 25.1 56 56s-25.1 56-56 56-56-25.1-56-56c0-5.3.7-10.5 2.1-15.3l-69.8-38.1C154.5 307 141.8 312 128 312c-30.9 0-56-25.1-56-56s25.1-56 56-56c13.9 0 26.6 5 36.3 13.4l69.8-38.1q-2.1-7.35-2.1-15.3c0-30.9 25.1-56 56-56s56 25.1 56 56"})
  );
}

export default LanShareAltSquareRegular;
