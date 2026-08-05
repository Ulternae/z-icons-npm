import React from 'react';

export function LanMonument({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -31.95 320 543.95',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M148.7-27.3c6.2-6.2 16.4-6.2 22.6 0l80 80c2.7 2.7 4.3 6.3 4.6 10.1l32 416 .1 1.2h16c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16h16l.1-1.2 32-416c.3-3.8 1.9-7.4 4.6-10.1zm75.8 98.4L160 6.6 95.5 71.1 64 480h192zM128 288h64c8.8 0 16 7.2 16 16s-7.2 16-16 16h-64c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanMonument;
