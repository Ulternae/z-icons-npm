import React from 'react';

export function LanRepeatAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -15.95 512 543.9',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M475.3 107.3c6.2-6.2 6.2-16.4 0-22.6l-96-96c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6L425.4 80H192C86 80 0 166 0 272c0 8.8 7.2 16 16 16s16-7.2 16-16c0-88.4 71.6-160 160-160h233.4l-68.7 68.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0zM36.7 404.7c-6.2 6.2-6.2 16.4 0 22.6l96 96c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L86.6 432H320c106 0 192-86 192-192 0-8.8-7.2-16-16-16s-16 7.2-16 16c0 88.4-71.6 160-160 160H86.6l68.7-68.7c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0z"})
  );
}

export default LanRepeatAlt;
