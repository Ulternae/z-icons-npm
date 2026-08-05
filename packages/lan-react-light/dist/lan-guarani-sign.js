import React from 'react';

export function LanGuaraniSign({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M176 0c-8.8 0-16 7.2-16 16v50.7C69.2 81.9 0 160.9 0 256s69.2 174.1 160 189.3V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-48c106 0 192-86 192-192 0-8.8-7.2-16-16-16H192V96c43.6 0 83.1 17.4 112 45.7 6.3 6.2 16.4 6.1 22.6-.2s6.1-16.4-.2-22.6C291.8 85 244.3 64 192 64V16c0-8.8-7.2-16-16-16m-16 99.2v313.6C87 398 32 333.4 32 256S87 114 160 99.2M192 416V272h159.2c-8 80.9-76.2 144-159.2 144"})
  );
}

export default LanGuaraniSign;
