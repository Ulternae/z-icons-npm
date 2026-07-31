import React from 'react';

export function CoreBagShopping({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 96v32h128V96c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32m-64 32V96c0-53 43-96 96-96h64c53 0 96 43 96 96v32h96v256c0 70.7-57.3 128-128 128H128C57.3 512 0 454.7 0 384V128zm224 64H64v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V192z"})
  );
}

export default CoreBagShopping;
