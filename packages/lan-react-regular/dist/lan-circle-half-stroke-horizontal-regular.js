import React from 'react';

export function LanCircleHalfStrokeHorizontalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M512 256a256 256 0 1 1-512 0 256 256 0 1 1 512 0M49.4 280C61.3 383.6 149.2 464 256 464s194.7-80.4 206.6-184zm413.2-48C450.7 128.4 362.8 48 256 48S61.3 128.4 49.4 232z"})
  );
}

export default LanCircleHalfStrokeHorizontalRegular;
