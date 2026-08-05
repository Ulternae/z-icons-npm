import React from 'react';

export function LanRubleSignThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 40c0-4.4 3.6-8 8-8h144c75.1 0 136 60.9 136 136s-60.9 136-136 136H80v88h176c4.4 0 8 3.6 8 8s-3.6 8-8 8H80v64c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64H16c-4.4 0-8-3.6-8-8s3.6-8 8-8h48v-88H16c-4.4 0-8-3.6-8-8s3.6-8 8-8h48zm16 248h136c66.3 0 120-53.7 120-120S282.3 48 216 48H80z"})
  );
}

export default LanRubleSignThin;
