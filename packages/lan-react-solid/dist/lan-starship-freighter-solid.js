import React from 'react';

export function LanStarshipFreighterSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 480C100.3 480 0 379.7 0 256S100.3 32 224 32c42.3 0 84.2 7.9 123.6 23.2l207.9 80.9c12.3 4.8 20.4 16.6 20.4 29.8V208c0 8.8-7.2 16-16 16h-128c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h128c8.8 0 16 7.2 16 16v42.1c0 13.2-8.1 25-20.4 29.8l-82.1 31.9c4.1 7.1 6.5 15.3 6.5 24.1 0 26.5-21.5 48-48 48h-80c-11.5 0-21.6-6.1-27.3-15.2-32.6 10.1-66.5 15.2-100.7 15.2zm0-256a32 32 0 1 1 0 64 32 32 0 1 1 0-64m0 112a80 80 0 1 0 0-160 80 80 0 1 0 0 160M80 280a24 24 0 1 0 0-48 24 24 0 1 0 0 48m56-120a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-24 216a24 24 0 1 0 0-48 24 24 0 1 0 0 48"})
  );
}

export default LanStarshipFreighterSolid;
