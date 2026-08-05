import React from 'react';

export function LanUpRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384.2 96v265.4l-84.7-84.7c-6.2-6.2-16.4-6.2-22.6 0L123.6 430.1c-6.2 6.2-16.4 6.2-22.6 0l-50.8-50.8c-6.2-6.2-6.2-16.4 0-22.6l153.4-153.4c6.2-6.2 6.2-16.4 0-22.6L118.9 96zm32-8c0-13.3-10.7-24-24-24H118.9c-28.5 0-42.8 34.5-22.6 54.6l73.3 73.4-142 142.1c-18.7 18.7-18.7 49.1 0 67.9l50.7 50.7c18.7 18.7 49.1 18.7 67.9 0l142-142.1 73.4 73.4c20.2 20.2 54.6 5.9 54.6-22.6z"})
  );
}

export default LanUpRight;
