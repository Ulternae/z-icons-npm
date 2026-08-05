import React from 'react';

export function LanPauseRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 80v352h64V80zM0 80c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48zm272 0v352h64V80zm-48 0c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48z"})
  );
}

export default LanPauseRegular;
