import React from 'react';

export function MinaSpeaker({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M9 14a3 3 0 1 0 6 0 3 3 0 0 0-6 0m2.5-7h1"}), React.createElement("path", {"d":"M12 3c3.418 0 5.127 0 6.188 1.318C19.25 5.636 19.25 7.758 19.25 12s0 6.364-1.062 7.682C17.127 21 15.418 21 12 21s-5.127 0-6.188-1.318C4.75 18.364 4.75 16.242 4.75 12s0-6.364 1.062-7.682C6.873 3 8.582 3 12 3"})
  );
}

export default MinaSpeaker;
