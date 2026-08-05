import React from 'react';

export function MinaInfo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 19.5v-10h-.5m0 10h1m-.5-14V5"})
  );
}

export default MinaInfo;
