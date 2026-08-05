import React from 'react';

export function LanChartKanbanThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M464 432c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32zm48-32c0 26.5-21.5 48-48 48h-32c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48zm-272-96h32c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32h-32c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32m32 16h-32c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v160c0 26.5-21.5 48-48 48M48 400h32c17.7 0 32-14.3 32-32V112c0-17.7-14.3-32-32-32H48c-17.7 0-32 14.3-32 32v256c0 17.7 14.3 32 32 32m32 16H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48v256c0 26.5-21.5 48-48 48"})
  );
}

export default LanChartKanbanThin;
