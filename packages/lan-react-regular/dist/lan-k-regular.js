import React from 'react';

export function LanKRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v400c0 13.3 10.7 24 24 24s24-10.7 24-24V337.9l79.6-79.6 148.7 211.5c7.6 10.8 22.6 13.5 33.4 5.8s13.4-22.6 5.8-33.4L162.1 223.9 313 73c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L48 270.1z"})
  );
}

export default LanKRegular;
