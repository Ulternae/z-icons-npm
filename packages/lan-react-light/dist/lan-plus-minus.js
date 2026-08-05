import React from 'react';

export function LanPlusMinus({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 208v160c0 8.8 7.2 16 16 16s16-7.2 16-16V208h160c8.8 0 16-7.2 16-16s-7.2-16-16-16H208V16c0-8.8-7.2-16-16-16s-16 7.2-16 16v160H16c-8.8 0-16 7.2-16 16s7.2 16 16 16zM0 496c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16s-7.2-16-16-16H16c-8.8 0-16 7.2-16 16"})
  );
}

export default LanPlusMinus;
