import React from 'react';

export function LanChartLineUpRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M48 56c0-13.3-10.7-24-24-24S0 42.7 0 56v344c0 44.2 35.8 80 80 80h408c13.3 0 24-10.7 24-24s-10.7-24-24-24H80c-17.7 0-32-14.3-32-32zm272 96c0 13.3 10.7 24 24 24h54.1L304 270.1l-79-79c-9.4-9.4-24.6-9.4-33.9 0l-88 88c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l71-71 79 79c9.4 9.4 24.6 9.4 33.9 0l111-111v54.1c0 13.3 10.7 24 24 24s24-10.7 24-24v-112c0-13.3-10.7-24-24-24h-112c-13.3 0-24 10.7-24 24z"})
  );
}

export default LanChartLineUpRegular;
