import React from 'react';

export function LanTabletButtonRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16zM0 64C0 28.7 28.7 0 64 0h320c35.3 0 64 28.7 64 64v384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 296a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanTabletButtonRegular;
