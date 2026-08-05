import React from 'react';

export function LanRectangleTall({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -64 384 640',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M320-32c17.7 0 32 14.3 32 32v512c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V0c0-17.7 14.3-32 32-32zM64-64C28.7-64 0-35.3 0 0v512c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V0c0-35.3-28.7-64-64-64z"})
  );
}

export default LanRectangleTall;
