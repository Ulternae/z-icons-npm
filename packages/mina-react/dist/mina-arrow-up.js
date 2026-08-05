import React from 'react';

export function MinaArrowUp({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 19.5v-15m0 0-6 5.625M12 4.5l6 5.625"})
  );
}

export default MinaArrowUp;
