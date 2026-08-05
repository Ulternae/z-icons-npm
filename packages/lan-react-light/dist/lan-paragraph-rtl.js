import React from 'react';

export function LanParagraphRtl({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 543.95',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 112C16 50.1 66.1 0 128 0h240c8.8 0 16 7.2 16 16s-7.2 16-16 16h-48v304c0 8.8-7.2 16-16 16s-16-7.2-16-16V32h-64v304c0 8.8-7.2 16-16 16s-16-7.2-16-16V224h-64c-61.9 0-112-50.1-112-112m176 80V32h-64c-44.2 0-80 35.8-80 80s35.8 80 80 80zm-84.7 164.7c6.2 6.2 6.2 16.4 0 22.6L54.6 432H368c8.8 0 16 7.2 16 16s-7.2 16-16 16H54.6l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0l-80-80c-6.2-6.2-6.2-16.4 0-22.6l80-80c6.2-6.2 16.4-6.2 22.6 0"})
  );
}

export default LanParagraphRtl;
