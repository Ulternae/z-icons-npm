import React from 'react';

export function MinaTreePalm({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M5.805 3.11c2.753-.554 5.347 1.04 6.029 3.801m0 0C8.632 8.525 7 16 9.617 21h4.337c-2.301-4.334-4.103-11.055-2.12-14.089m0 0C14.158 5.21 18.145 6.014 20 8.06m-8.166-1.15c2.811.703 4.628 3.646 4.034 6.543M11.834 6.91C9.048 5.684 5.704 6.68 4 9.245"})
  );
}

export default MinaTreePalm;
