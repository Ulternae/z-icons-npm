import React from 'react';

export function LanExpand({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M144 32c8.8 0 16 7.2 16 16s-7.2 16-16 16H32v112c0 8.8-7.2 16-16 16s-16-7.2-16-16V48c0-8.8 7.2-16 16-16zM0 336c0-8.8 7.2-16 16-16s16 7.2 16 16v112h112c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16zM432 32c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16s-16-7.2-16-16V64H304c-8.8 0-16-7.2-16-16s7.2-16 16-16zm-16 304c0-8.8 7.2-16 16-16s16 7.2 16 16v128c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16s7.2-16 16-16h112z"})
  );
}

export default LanExpand;
