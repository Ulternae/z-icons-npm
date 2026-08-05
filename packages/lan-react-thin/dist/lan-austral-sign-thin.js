import React from 'react';

export function LanAustralSignThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M222.5 49c.2-.6.8-1 1.5-1s1.3.4 1.5 1l71.3 191H151.2zm-88.4 191H24c-4.4 0-8 3.6-8 8s3.6 8 8 8h104.1l-29.9 80H23.9c-4.4 0-8 3.6-8 8s3.6 8 8 8h68.3L48.4 469.2c-1.5 4.1.6 8.7 4.7 10.3s8.7-.6 10.3-4.7L109.3 352h229.3l45.9 122.8c1.5 4.1 6.2 6.2 10.3 4.7s6.2-6.2 4.7-10.3L355.7 352H424c4.4 0 8-3.6 8-8s-3.6-8-8-8h-74.2l-29.9-80H424c4.4 0 8-3.6 8-8s-3.6-8-8-8H313.9L240.5 43.4C237.9 36.6 231.3 32 224 32s-13.9 4.6-16.5 11.4zm168.7 16 29.9 80H115.4l29.9-80h157.6z"})
  );
}

export default LanAustralSignThin;
