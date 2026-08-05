import React from 'react';

export function LanPrescriptionRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 0C10.7 0 0 10.7 0 24v272c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h78.1l128 128-119 119c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l119-119 119 119c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-119-119 119-119c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-119 119-95.3-95.3c53.9-8.1 95.3-54.6 95.3-110.8C288 50.1 237.9 0 176 0zm152 176H48V48h128c35.3 0 64 28.7 64 64s-28.7 64-64 64"})
  );
}

export default LanPrescriptionRegular;
