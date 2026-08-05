import React from 'react';

export function LanBallPile({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -8 640 528',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 520a88 88 0 1 1 0-176 88 88 0 1 1 0 176m208 0a88 88 0 1 1 0-176 88 88 0 1 1 0 176m208 0a88 88 0 1 1 0-176 88 88 0 1 1 0 176m0-144a56 56 0 1 0 0 112 56 56 0 1 0 0-112m-416 0a56 56 0 1 0 0 112 56 56 0 1 0 0-112m208 0a56 56 0 1 0 0 112 56 56 0 1 0 0-112m-104-32a88 88 0 1 1 0-176 88 88 0 1 1 0 176m208 0a88 88 0 1 1 0-176 88 88 0 1 1 0 176M216 200a56 56 0 1 0 0 112 56 56 0 1 0 0-112m208 0a56 56 0 1 0 0 112 56 56 0 1 0 0-112m-104-32a88 88 0 1 1 0-176 88 88 0 1 1 0 176m0-144a56 56 0 1 0 0 112 56 56 0 1 0 0-112"})
  );
}

export default LanBallPile;
