import React from 'react';

export function LanSkeleton({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 0c8.8 0 16 7.2 16 16v80h152c8.8 0 16 7.2 16 16s-7.2 16-16 16H272v64h216c8.8 0 16 7.2 16 16s-7.2 16-16 16H272v64h120c8.8 0 16 7.2 16 16s-7.2 16-16 16H272v96h64c44.2 0 80 35.8 80 80 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-26.5-21.5-48-48-48H176c-26.5 0-48 21.5-48 48 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-44.2 35.8-80 80-80h64v-96H120c-8.8 0-16-7.2-16-16s7.2-16 16-16h120v-64H24c-8.8 0-16-7.2-16-16s7.2-16 16-16h216v-64H88c-8.8 0-16-7.2-16-16s7.2-16 16-16h152V16c0-8.8 7.2-16 16-16"})
  );
}

export default LanSkeleton;
