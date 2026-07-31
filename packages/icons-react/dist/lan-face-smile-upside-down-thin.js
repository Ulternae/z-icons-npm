import React from 'react';

export const LanFaceSmileUpsideDownThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 256a240 240 0 1 1 480 0 240 240 0 1 1-480 0m496 0a256 256 0 1 0-512 0 256 256 0 1 0 512 0m-362.8-76.2C174.1 148.3 212.7 128 256 128s81.9 20.3 106.8 51.8c2.7 3.5 7.8 4.1 11.2 1.3s4.1-7.8 1.3-11.2C347.6 134.7 304.4 112 256 112s-91.6 22.7-119.4 57.9c-2.7 3.5-2.1 8.5 1.3 11.2s8.5 2.1 11.2-1.3zM192 304a16 16 0 1 0-32 0 16 16 0 1 0 32 0m144-16a16 16 0 1 0 0 32 16 16 0 1 0 0-32"})
);

export default LanFaceSmileUpsideDownThin;
