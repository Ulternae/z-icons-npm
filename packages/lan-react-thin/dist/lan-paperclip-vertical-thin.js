import React from 'react';

export function LanPaperclipVerticalThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -32 384 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 88C32 21.7 85.7-32 152-32S272 21.7 272 88v264c0 35.3-28.7 64-64 64s-64-28.7-64-64V104c0-4.4 3.6-8 8-8s8 3.6 8 8v248c0 26.5 21.5 48 48 48s48-21.5 48-48V88c0-57.4-46.6-104-104-104S48 30.6 48 88v288c0 83.9 68.1 152 152 152s152-68.1 152-152V136c0-4.4 3.6-8 8-8s8 3.6 8 8v240c0 92.8-75.2 168-168 168S32 468.8 32 376z"})
  );
}

export default LanPaperclipVerticalThin;
