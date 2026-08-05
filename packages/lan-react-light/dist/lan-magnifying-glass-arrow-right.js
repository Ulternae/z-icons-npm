import React from 'react';

export function LanMagnifyingGlassArrowRight({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 32a176 176 0 1 1 0 352 176 176 0 1 1 0-352m0 384c51.7 0 99-18.8 135.3-50l141.4 141.3c6.2 6.2 16.4 6.2 22.6 0s6.2-16.4 0-22.6L366 343.3c31.2-36.3 50-83.6 50-135.3C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m19.3-124.7 72-72c6.2-6.2 6.2-16.4 0-22.6l-72-72c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l44.7 44.7H128c-8.8 0-16 7.2-16 16s7.2 16 16 16h121.4l-44.7 44.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0"})
  );
}

export default LanMagnifyingGlassArrowRight;
