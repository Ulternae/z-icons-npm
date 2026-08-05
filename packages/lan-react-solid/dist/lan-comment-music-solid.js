import React from 'react';

export function LanCommentMusicSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 480c141.4 0 256-107.5 256-240S397.4 0 256 0 0 107.5 0 240c0 54.3 19.2 104.3 51.6 144.5L2.8 476.8c-4.8 9-3.3 20 3.6 27.5s17.8 9.8 27.1 5.8l118.4-50.7c31.8 13.2 67 20.6 104.1 20.6m56-352c13.3 0 24 10.7 24 24v16c0 13.3-10.7 24-24 24h-24v104c0 30.9-28.7 56-64 56s-64-25.1-64-56 28.7-56 64-56c5.5 0 10.9.6 16 1.8V152c0-13.3 10.7-24 24-24z"})
  );
}

export default LanCommentMusicSolid;
