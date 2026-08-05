import React from 'react';

export function LanSlashBack({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M7.8 2.3c-7.6 4.5-10 14.4-5.5 22l288 480c4.5 7.6 14.4 10 22 5.5s10-14.4 5.5-22L29.7 7.8c-4.5-7.6-14.4-10-22-5.5z"})
  );
}

export default LanSlashBack;
