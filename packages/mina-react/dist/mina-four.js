import React from 'react';

export function MinaFour({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12.917 7c-1.042 3.75-4.167 6.875-4.167 6.875H15M13.438 17v-5"})
  );
}

export default MinaFour;
