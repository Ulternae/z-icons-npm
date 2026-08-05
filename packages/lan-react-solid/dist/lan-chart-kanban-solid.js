import React from 'react';

export function LanChartKanbanSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 448c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v288c0 26.5 21.5 48 48 48zM320 272V112c0-26.5-21.5-48-48-48h-32c-26.5 0-48 21.5-48 48v160c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48m-192 96V112c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v256c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48"})
  );
}

export default LanChartKanbanSolid;
