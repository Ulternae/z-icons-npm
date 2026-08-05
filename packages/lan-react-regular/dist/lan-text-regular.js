import React from 'react';

export function LanTextRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 136V80h120v352h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h176c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64V80h120v56c0 13.3 10.7 24 24 24s24-10.7 24-24V72c0-22.1-17.9-40-40-40H40C17.9 32 0 49.9 0 72v64c0 13.3 10.7 24 24 24s24-10.7 24-24"})
  );
}

export default LanTextRegular;
