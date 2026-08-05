import React from 'react';

export function LanRoadSpikes({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M93.3 108c50.2 75.4 83.1 124.7 98.7 148V116.8c0-15.8 20.5-22 29.3-8.9 50.2 75.4 83.1 124.7 98.7 148V116.7c0-15.8 20.5-22 29.3-8.9 50.2 75.4 83.1 124.7 98.7 148V116.6c0-15.8 20.5-22 29.3-8.9l129.5 194.5c14.2 21.3-1.1 49.8-26.6 49.8H64V116.8c0-15.8 20.5-22 29.3-8.9zM512 320h68.2L480 169.7V320zm-90.6-46.2L352 169.7V320h100.2zm-128 0L224 169.7V320h100.2zm-128 0L96 169.7V320h100.2zM16 416h608c8.8 0 16 7.2 16 16s-7.2 16-16 16H16c-8.8 0-16-7.2-16-16s7.2-16 16-16"})
  );
}

export default LanRoadSpikes;
