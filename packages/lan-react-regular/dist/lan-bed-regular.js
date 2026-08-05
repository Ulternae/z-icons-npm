import React from 'react';

export function LanBedRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v400c0 13.3 10.7 24 24 24s24-10.7 24-24v-72h480v72c0 13.3 10.7 24 24 24s24-10.7 24-24V264c0-66.3-53.7-120-120-120H328c-30.9 0-56 25.1-56 56v136H48zm480 208v72H320V200c0-4.4 3.6-8 8-8h128c39.8 0 72 32.2 72 72m-400-40a32 32 0 1 1 64 0 32 32 0 1 1-64 0m112 0a80 80 0 1 0-160 0 80 80 0 1 0 160 0"})
  );
}

export default LanBedRegular;
