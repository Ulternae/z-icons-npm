import React from 'react';

export function LanChartFftRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v344c0 44.2 35.8 80 80 80h408c13.3 0 24-10.7 24-24s-10.7-24-24-24H80c-17.7 0-32-14.3-32-32zm229.7 29.8c-4.2-8.8-13.3-14.3-23-13.7s-18.2 6.9-21.4 16.1L158.9 304H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h56c10.2 0 19.4-6.5 22.7-16.2l60.7-176.2 38.9 82.6c4 8.4 12.4 13.8 21.7 13.8h66.2l49.1 84.1c6.7 11.4 21.4 15.3 32.8 8.6s15.3-21.4 8.6-32.8l-56-96A23.93 23.93 0 0 0 400 208h-64.8z"})
  );
}

export default LanChartFftRegular;
