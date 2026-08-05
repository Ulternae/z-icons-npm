import React from 'react';

export function LanChevronSquareRightThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M432 96c0-26.5-21.5-48-48-48H64c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48zm-48-64c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zm-66.3 229.7-120 120c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3L300.7 256 186.3 141.7c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l120 120c3.1 3.1 3.1 8.2 0 11.3z"})
  );
}

export default LanChevronSquareRightThin;
