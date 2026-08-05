import React from 'react';

export function LanAreaChart({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M32 48c0-8.8-7.2-16-16-16S0 39.2 0 48v352c0 44.2 35.8 80 80 80h416c8.8 0 16-7.2 16-16s-7.2-16-16-16H80c-26.5 0-48-21.5-48-48zm273.2 154.9c5.9 6.4 14.2 10.2 22.9 10.4s17.2-3.2 23.3-9.4l40.6-40.6 56 56V352H128v-98l112-122.2zm23.6-21.6c-9.8-10.7-33.5-36.5-71.1-77.5-4.5-5-11-7.8-17.7-7.8s-13.1 2.8-17.7 7.8l-120 130.9c-4.1 4.4-6.3 10.2-6.3 16.2V360c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V216c0-6.4-2.5-12.5-7-17l-64-64c-9.4-9.4-24.6-9.4-33.9 0z"})
  );
}

export default LanAreaChart;
