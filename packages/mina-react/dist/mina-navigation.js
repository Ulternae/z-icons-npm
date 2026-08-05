import React from 'react';

export function MinaNavigation({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M11.54 3.333a.485.485 0 0 1 .92 0l6.5 16.916c.178.464-.272.917-.685.69l-6.05-3.314a.46.46 0 0 0-.45 0l-6.05 3.315c-.413.226-.863-.227-.685-.69z"})
  );
}

export default MinaNavigation;
