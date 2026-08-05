import React from 'react';

export function LanWaveSquare({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 96v168c0 13.3-10.7 24-24 24H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V88c0-13.3 10.7-24 24-24h128c13.3 0 24 10.7 24 24v328h112V248c0-13.3 10.7-24 24-24h88c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80v168c0 13.3-10.7 24-24 24H264c-13.3 0-24-10.7-24-24V96z"})
  );
}

export default LanWaveSquare;
