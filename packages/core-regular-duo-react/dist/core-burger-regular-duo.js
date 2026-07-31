import React from 'react';

export function CoreBurgerRegularDuo({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 192h384c0-33.3-12.7-63.6-33.5-86.3-4.1 12.9-16.2 22.3-30.5 22.3-17.7 0-32-14.3-32-32 0-9.8 4.4-18.6 11.4-24.5-13.5-4.9-28.1-7.5-43.4-7.5h-32c0 17.7-14.3 32-32 32s-32-14.3-32-32h-32c-15.2 0-29.8 2.7-43.4 7.5 7 5.9 11.4 14.7 11.4 24.5 0 17.7-14.3 32-32 32-14.3 0-26.4-9.4-30.5-22.3C76.7 128.5 64 158.8 64 192m0 192c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64z","opacity":".4"}), React.createElement("path", {"fill":"currentColor","d":"M320 0c106 0 192 86 192 192h-64c0-70.7-57.3-128-128-128H192c-70.7 0-128 57.3-128 128H0C0 86 86 0 192 0zm64 512H128C57.3 512 0 454.7 0 384h64c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64h64c0 70.7-57.3 128-128 128m128-256v64H0v-64z"})
  );
}

export default CoreBurgerRegularDuo;
