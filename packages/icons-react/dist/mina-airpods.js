import React from 'react';

export const MinaAirpods = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M10 18V8a3.5 3.5 0 1 0-3.5 3.5c.274-.006.5.214.5.488V18a1.5 1.5 0 0 0 3 0m4 0V8a3.5 3.5 0 1 1 3.5 3.5.49.49 0 0 0-.5.488V18a1.5 1.5 0 0 1-3 0"})
);

export default MinaAirpods;
