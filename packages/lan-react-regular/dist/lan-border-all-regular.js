import React from 'react';

export function LanBorderAllRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M384 80c8.8 0 16 7.2 16 16v136H248V80zm16 200v136c0 8.8-7.2 16-16 16H248V280zm-200-48H48V96c0-8.8 7.2-16 16-16h136zM48 280h152v152H64c-8.8 0-16-7.2-16-16zM64 32C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64z"})
  );
}

export default LanBorderAllRegular;
