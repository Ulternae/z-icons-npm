import React from 'react';

export const MinaPaint = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 24 24',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"d":"M16.5 5.5h1c1.105 0 2 .395 2 1.5v2a2 2 0 0 1-2 2h-7a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h1m5-15.5V4a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z"})
);

export default MinaPaint;
