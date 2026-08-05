import React from 'react';

export function LanSquareHalfHorizontalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 256v160l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320C30.9 480 3.6 454.8.3 422.5L0 416V256zM48 416c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V304H48z"})
  );
}

export default LanSquareHalfHorizontalRegular;
