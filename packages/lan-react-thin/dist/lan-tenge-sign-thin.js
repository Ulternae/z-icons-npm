import React from 'react';

export function LanTengeSignThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 40c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H8c-4.4 0-8-3.6-8-8m0 128c0-4.4 3.6-8 8-8h368c4.4 0 8 3.6 8 8s-3.6 8-8 8H200v296c0 4.4-3.6 8-8 8s-8-3.6-8-8V176H8c-4.4 0-8-3.6-8-8"})
  );
}

export default LanTengeSignThin;
