import React from 'react';

export function MinaAlarmClock({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 24 24',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("g", {"fill":"none","stroke":"currentColor","strokeLinecap":"round","strokeLinejoin":"round","strokeWidth":"1.5"}, React.createElement("path", {"d":"M3 5.231 6.15 3M21 5.231 17.85 3M20 13a8 8 0 1 1-16 0 8 8 0 0 1 16 0"}), React.createElement("path", {"d":"M12 8.5v5l3 2"}))
  );
}

export default MinaAlarmClock;
