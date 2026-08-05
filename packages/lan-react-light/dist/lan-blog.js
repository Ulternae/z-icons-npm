import React from 'react';

export function LanBlog({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M224 16c0-8.8 7.2-16 16-16 150.2 0 272 121.8 272 272 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-132.5-107.5-240-240-240-8.8 0-16-7.2-16-16M48 96c8.8 0 16 7.2 16 16v256c0 61.9 50.1 112 112 112s112-50.1 112-112-50.1-112-112-112h-32c-8.8 0-16-7.2-16-16s7.2-16 16-16h32c79.5 0 144 64.5 144 144s-64.5 144-144 144S32 447.5 32 368V112c0-8.8 7.2-16 16-16m192 0c97.2 0 176 78.8 176 176 0 8.8-7.2 16-16 16s-16-7.2-16-16c0-79.5-64.5-144-144-144-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanBlog;
