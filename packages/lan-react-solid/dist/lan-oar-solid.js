import React from 'react';

export function LanOarSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.975 576.575 566.4',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M457.9-22.6c12.5-12.5 32.8-12.5 45.3 0l64 64c12.5 12.5 12.5 32.8 0 45.2s-32.8 12.5-45.3 0l-9.4-9.4-195.1 195-11.7 88.2c-1.6 12.2-7.2 23.5-15.9 32.2L167.4 515c-25.9 25.9-68 25.9-93.9 0l-44-44c-25.9-26-25.9-68 0-94l122.4-122.3c8.7-8.7 20-14.3 32.2-15.9l88.2-11.8 195-195-9.4-9.4c-12.5-12.5-12.5-32.8 0-45.2"})
  );
}

export default LanOarSolid;
