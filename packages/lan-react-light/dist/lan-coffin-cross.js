import React from 'react';

export function LanCoffinCross({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208.5 112c0-8.8-7.2-16-16-16s-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16s7.2 16 16 16h64v128c0 8.8 7.2 16 16 16s16-7.2 16-16V208h64c8.8 0 16-7.2 16-16s-7.2-16-16-16h-64zm-196.6 2.9 91-104C109 4 117.7 0 127 0h131c9.2 0 18 4 24.1 10.9l91 104c10.3 11.7 14 28.4 9.7 43.4l-95.7 330.6c-4 13.7-16.5 23.1-30.7 23.1H128.5c-14.3 0-26.8-9.4-30.7-23.1L2.3 158.3c-4.3-15-.6-31.7 9.7-43.4zM36 136c-3.2 3.6-4.3 8.8-3 13.5l95.5 330.6h127.9l95.5-330.6c1.3-4.6.2-9.8-3-13.5l-91-104h-131l-91 104z"})
  );
}

export default LanCoffinCross;
