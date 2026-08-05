import React from 'react';

export function LanMagnifyingGlassChartThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 16a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 400c54.6 0 104.2-21 141.3-55.4l149 149c3.1 3.1 8.2 3.1 11.3 0s3.1-8.2 0-11.3l-149-149C395 312.2 416 262.6 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208m-80-216v80c0 4.4 3.6 8 8 8s8-3.6 8-8v-80c0-4.4-3.6-8-8-8s-8 3.6-8 8m72-96v176c0 4.4 3.6 8 8 8s8-3.6 8-8V104c0-4.4-3.6-8-8-8s-8 3.6-8 8m72 64v112c0 4.4 3.6 8 8 8s8-3.6 8-8V168c0-4.4-3.6-8-8-8s-8 3.6-8 8"})
  );
}

export default LanMagnifyingGlassChartThin;
