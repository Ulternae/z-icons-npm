import React from 'react';

export function LanMusicAltSlashSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 576 576.1',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M41-24.9c-9.4-9.4-24.6-9.4-33.9 0S-2.3-.3 7 9.1l528 528c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L352 286.2V185l103.8-26c14.2-3.6 24.2-16.4 24.2-31V32c0-9.9-4.5-19.2-12.3-25.2S449.8-1.4 440.2 1l-128 32C298 36.5 288 49.3 288 64v158.2L41-24.8zm193.3 329C175.1 306.6 128 348.6 128 400c0 53 50.1 96 112 96 54.1 0 99.2-32.8 109.7-76.5z"})
  );
}

export default LanMusicAltSlashSolid;
