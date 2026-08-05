import React from 'react';

export function LanTapeThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416m83.3 416C421.8 430.9 480 350.3 480 256c0-123.7-100.3-224-224-224S32 132.3 32 256s100.3 224 224 224h312c4.4 0 8-3.6 8-8s-3.6-8-8-8zM256 176a80 80 0 1 1 0 160 80 80 0 1 1 0-160m0 176a96 96 0 1 0 0-192 96 96 0 1 0 0 192"})
  );
}

export default LanTapeThin;
