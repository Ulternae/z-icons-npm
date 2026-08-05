import React from 'react';

export function LanMagnetRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M56 80c-4.4 0-8 3.6-8 8v72h64V88c0-4.4-3.6-8-8-8zm-8 208c0 97.2 78.8 176 176 176s176-78.8 176-176v-80h-64v80c0 61.9-50.1 112-112 112s-112-50.1-112-112v-80H48zm352-128V88c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v72zM0 88c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v200c0 35.3 28.7 64 64 64s64-28.7 64-64V88c0-30.9 25.1-56 56-56h48c30.9 0 56 25.1 56 56v200c0 123.7-100.3 224-224 224S0 411.7 0 288z"})
  );
}

export default LanMagnetRegular;
