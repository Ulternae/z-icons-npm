import React from 'react';

export function MinaLetterGCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"}), React.createElement("path", {"d":"M12.833 12H14a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a1.5 1.5 0 0 1-1.5-1.5v-5A1.5 1.5 0 0 1 11 8h2a1.5 1.5 0 0 1 1.5 1.5"})
  );
}

export default MinaLetterGCircle;
