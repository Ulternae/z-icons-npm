import React from 'react';

export function LanDreidelSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M503.1 9.4c12.5 12.5 12.5 32.8 0 45.3l-136 136 63.4 63.4c18.7 18.7 18.7 49.1 0 67.9l-37.1 37.1-240-240L190.5 82c18.7-18.7 49.1-18.7 67.9 0l63.4 63.4 136-136c12.5-12.5 32.8-12.5 45.3 0M119.5 153l240 240-73 73c-9 9-21.2 14.1-33.9 14.1L80.5 480c-26.5 0-48-21.5-48-48V259.9c0-12.7 5.1-24.9 14.1-33.9l73-73z"})
  );
}

export default LanDreidelSolid;
