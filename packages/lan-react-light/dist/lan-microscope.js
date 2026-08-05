import React from 'react';

export function LanMicroscope({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 32c-8.8 0-16 7.2-16 16v224c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16V48c0-8.8-7.2-16-16-16zm-48 16c0-26.5 21.5-48 48-48h64c26.5 0 48 21.5 48 48v80h32c106 0 192 86 192 192 0 66.8-34.1 125.6-85.8 160H496c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h304c88.4 0 160-71.6 160-160s-71.6-160-160-160h-32v112c0 26.5-21.5 48-48 48h-64c-26.5 0-48-21.5-48-48zm-16 336h192c8.8 0 16 7.2 16 16s-7.2 16-16 16H112c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanMicroscope;
