import React from 'react';

export function LanSquareHalfHorizontalThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M448 256v160l-.3 6.5c-3.1 30.1-27 54.1-57.1 57.1l-6.5.3h-320C30.9 480 3.6 454.8.3 422.5L0 416V256zM16 416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V272H16z"})
  );
}

export default LanSquareHalfHorizontalThin;
