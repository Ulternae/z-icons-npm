import React from 'react';

export function MinaFemale({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M12 15a6 6 0 1 0 0-12 6 6 0 0 0 0 12m0 0v6m-2-2h4"})
  );
}

export default MinaFemale;
