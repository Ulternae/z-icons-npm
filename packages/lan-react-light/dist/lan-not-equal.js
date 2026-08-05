import React from 'react';

export function LanNotEqual({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M381.2 57.1c5-7.3 3.2-17.2-4-22.3s-17.2-3.2-22.3 4L293.2 128H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h255L138.1 352H16c-8.8 0-16 7.2-16 16s7.2 16 16 16h99.9l-49.1 70.9c-5 7.3-3.2 17.2 4 22.3s17.2 3.2 22.3-4l61.7-89.2H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H177l132.9-192H432c8.8 0 16-7.2 16-16s-7.2-16-16-16h-99.9z"})
  );
}

export default LanNotEqual;
