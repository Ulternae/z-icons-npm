import React from 'react';

export function LanH5({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c0-8.8-7.2-16-16-16s-16 7.2-16 16v352c0 8.8 7.2 16 16 16s16-7.2 16-16V272h160v160c0 8.8 7.2 16 16 16s16-7.2 16-16V80c0-8.8-7.2-16-16-16s-16 7.2-16 16v160H64zm272-16c-8.8 0-16 7.2-16 16v160c0 8.8 7.2 16 16 16h104c44.2 0 80 35.8 80 80s-35.8 80-80 80H336c-8.8 0-16 7.2-16 16s7.2 16 16 16h104c61.9 0 112-50.1 112-112s-50.1-112-112-112h-88V96h168c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})
  );
}

export default LanH5;
