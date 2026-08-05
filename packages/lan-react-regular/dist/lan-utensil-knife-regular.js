import React from 'react';

export function LanUtensilKnifeRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 513.625 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M439.1 39c9.4-9.4 24.6-9.4 33.9 0l.8.8c53.1 53.1 53.1 139.2 0 192.3L355 351c-28.1 28.1-73.7 28.1-101.8 0l-29.1-29.1-183 183c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l432-432zm-181 249 29.1 29.1c9.4 9.4 24.6 9.4 33.9 0l118.8-118.9c28.8-28.8 33.5-72.5 14-106.2z"})
  );
}

export default LanUtensilKnifeRegular;
