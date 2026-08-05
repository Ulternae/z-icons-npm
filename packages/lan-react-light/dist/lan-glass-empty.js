import React from 'react';

export function LanGlassEmpty({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M40.5 32c-4.7 0-8.4 4-8 8.7l34.6 410C68.5 467.3 82.3 480 99 480h186.8c16.6 0 30.5-12.7 31.9-29.3l34.6-410c.4-4.7-3.3-8.7-8-8.7zM.6 43.4C-1.3 20 17.1 0 40.5 0h303.7c23.4 0 41.8 20 39.9 43.4l-34.6 410c-2.8 33.1-30.5 58.6-63.7 58.6H99c-33.3 0-61-25.5-63.8-58.6z"})
  );
}

export default LanGlassEmpty;
