import React from 'react';

export function LanNotdefRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 421.8 162.8 256 48 90.2zM77.2 464h229.6L192 298.2zm144-208L336 421.8V90.2zm85.6-208H77.2L192 213.8zM0 48C0 21.5 21.5 0 48 0h288c26.5 0 48 21.5 48 48v416c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48z"})
  );
}

export default LanNotdefRegular;
