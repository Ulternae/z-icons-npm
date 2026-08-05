import React from 'react';

export function LanBagShoppingSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 448 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M160 80c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160zm-48 48H48c-26.5 0-48 21.5-48 48v208c0 53 43 96 96 96h256c53 0 96-43 96-96V176c0-26.5-21.5-48-48-48h-64V80c0-61.9-50.1-112-112-112S112 18.1 112 80zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48m152 24a24 24 0 1 1 48 0 24 24 0 1 1-48 0"})
  );
}

export default LanBagShoppingSolid;
