import React from 'react';

export function LanAlignSlash({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.85 576 575.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M27.3-27.2c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l544 544c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L390.5 336H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H358.5l-96-96H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H230.5l-96-96H496c8.8 0 16-7.2 16-16s-7.2-16-16-16H102.5zM117.5 176H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h69.5zm128 128H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h197.5zm128 128H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h325.5z"})
  );
}

export default LanAlignSlash;
