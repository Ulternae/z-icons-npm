import React from 'react';

export function LanCornerRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 184c0-13.3 10.7-24 24-24h424c35.3 0 64 28.7 64 64v136c0 13.3-10.7 24-24 24s-24-10.7-24-24V224c0-8.8-7.2-16-16-16H24c-13.3 0-24-10.7-24-24"})
  );
}

export default LanCornerRegular;
