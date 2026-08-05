import React from 'react';

export function LanSlashThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '-0.025 -32.125 576.025 575.95',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M2.3-29.8c3.1-3.1 8.2-3.1 11.3 0l560 560c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0l-560-560c-3.1-3.1-3.1-8.2 0-11.3"})
  );
}

export default LanSlashThin;
