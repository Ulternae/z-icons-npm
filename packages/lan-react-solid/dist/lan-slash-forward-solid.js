import React from 'react';

export function LanSlashForwardSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M303.9 4.2c15.3 8.8 20.7 28.3 11.9 43.7l-256 448c-8.8 15.3-28.3 20.7-43.7 11.9s-20.6-28.3-11.9-43.7l256-448C269 .8 288.5-4.6 303.9 4.2"})
  );
}

export default LanSlashForwardSolid;
