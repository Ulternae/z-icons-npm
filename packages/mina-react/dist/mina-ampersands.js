import React from 'react';

export function MinaAmpersands({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"d":"M11 17.5C9.174 15.517 3 12 3.481 8.525c0-1.1.904-2.025 1.963-2.025s1.964.924 1.964 2.025c0 1.83-2.585 3.505-3.699 4.654-.945.975-.945 2.605 0 3.58.944.973 2.537.963 3.471 0L11 12.687M21 17.5c-1.826-1.983-8-5.5-7.519-8.975 0-1.1.904-2.025 1.963-2.025s1.964.924 1.964 2.025c0 1.83-2.585 3.505-3.699 4.654-.945.975-.945 2.605 0 3.58.944.973 2.537.963 3.471 0L21 12.687"})
  );
}

export default MinaAmpersands;
