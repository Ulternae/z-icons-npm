import React from 'react';

export function LanGripLinesVerticalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 192 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32C10.7 32 0 42.7 0 56v400c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24m144 0c-13.3 0-24 10.7-24 24v400c0 13.3 10.7 24 24 24s24-10.7 24-24V56c0-13.3-10.7-24-24-24"})
  );
}

export default LanGripLinesVerticalRegular;
