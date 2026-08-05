import React from 'react';

export function LanText({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 72c0-4.4 3.6-8 8-8h136v384H96c-8.8 0-16 7.2-16 16s7.2 16 16 16h192c8.8 0 16-7.2 16-16s-7.2-16-16-16h-80V64h136c4.4 0 8 3.6 8 8v72c0 8.8 7.2 16 16 16s16-7.2 16-16V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v72c0 8.8 7.2 16 16 16s16-7.2 16-16z"})
  );
}

export default LanText;
