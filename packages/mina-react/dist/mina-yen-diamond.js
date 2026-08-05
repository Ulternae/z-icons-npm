import React from 'react';

export function MinaYenDiamond({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M2.707 10.295a2.41 2.41 0 0 0 0 3.41l7.588 7.588a2.41 2.41 0 0 0 3.41 0l7.588-7.588a2.41 2.41 0 0 0 0-3.41l-7.588-7.588a2.41 2.41 0 0 0-3.41 0zM15.182 12.5H12m0 0H8.818m3.182 0-3.5-5m3.5 5 3.5-5m-3.5 5V15m3.182 0H12m0 0H8.818M12 15v2.5"})
  );
}

export default MinaYenDiamond;
