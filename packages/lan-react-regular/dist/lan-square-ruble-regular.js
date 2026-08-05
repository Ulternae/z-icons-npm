import React from 'react';

export function LanSquareRubleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 48c0-13.3 10.7-24 24-24h80c48.6 0 88 39.4 88 88s-39.4 88-88 88h-56v24h56c8.8 0 16 7.2 16 16s-7.2 16-16 16h-56v16c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h24v-40h-24c-8.8 0-16-7.2-16-16s7.2-16 16-16h24zm104 104c22.1 0 40-17.9 40-40s-17.9-40-40-40h-56v80z"})
  );
}

export default LanSquareRubleRegular;
