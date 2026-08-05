import React from 'react';

export function LanSubscript({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M80 64c-8.8 0-16 7.2-16 16s7.2 16 16 16h39.2L221 256 119.2 416H80c-8.8 0-16 7.2-16 16s7.2 16 16 16h48c5.5 0 10.6-2.8 13.5-7.4L240 285.8l98.5 154.8c2.9 4.6 8 7.4 13.5 7.4h48c8.8 0 16-7.2 16-16s-7.2-16-16-16h-39.2L259 256 360.8 96H400c8.8 0 16-7.2 16-16s-7.2-16-16-16h-48c-5.5 0-10.6 2.8-13.5 7.4L240 226.2 141.5 71.4c-2.9-4.6-8-7.4-13.5-7.4zm448 272c0-5.1-2.5-10-6.6-13s-9.5-3.8-14.4-2.2l-48 16c-8.4 2.8-12.9 11.9-10.1 20.2s11.9 12.9 20.2 10.1l26.9-9v121.8h-32c-8.8 0-16 7.2-16 16s7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16h-32v-144z"})
  );
}

export default LanSubscript;
