import React from 'react';

export const CoreBagShoppingSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'currentColor',
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M192 64h64c17.7 0 32 14.3 32 32v32H160V96c0-17.7 14.3-32 32-32M96 96v32H0v256c0 70.7 57.3 128 128 128h192c70.7 0 128-57.3 128-128V128h-96V96c0-53-43-96-96-96h-64c-53 0-96 43-96 96"})
);

export default CoreBagShoppingSolid;
