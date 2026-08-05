import React from 'react';

export function MinaFunnyCircle({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"m8.699 10.646-.104-.49m4.995-.55-.104-.49M8.5 15.57c1.258.316 2.686.316 4.123-.069 1.436-.385 2.672-1.099 3.604-2.001"}), React.createElement("path", {"d":"m12.587 15.637.478.974a1.5 1.5 0 1 0 2.693-1.322l-.46-.935"}), React.createElement("path", {"d":"M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0"})
  );
}

export default MinaFunnyCircle;
