import React from 'react';

export function LanSignalAlt3({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M309.3 144c0-8.8-7.2-16-16-16s-16 7.2-16 16v320c0 8.8 7.2 16 16 16s16-7.2 16-16zM154.7 256c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16s16-7.2 16-16V272c0-8.8-7.2-16-16-16M16 384c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16s16-7.2 16-16v-64c0-8.8-7.2-16-16-16"})
  );
}

export default LanSignalAlt3;
