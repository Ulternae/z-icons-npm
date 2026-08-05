import React from 'react';

export function LanChartRadarSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M33.5 291.8c-12.7-22.2-12.7-49.4 0-71.5l96.2-168.1C142.5 29.8 166.4 16 192.2 16h191.6c25.8 0 49.7 13.8 62.5 36.2l96.2 168.1c12.7 22.2 12.7 49.4 0 71.5l-96.2 168.1c-12.8 22.4-36.7 36.2-62.5 36.2H192.2c-25.8 0-49.7-13.8-62.5-36.2zM336 160c0-26.5-21.5-48-48-48s-48 21.5-48 48c0 6.7 1.4 13.1 3.9 18.9l-46.1 61.5q-2.85-.3-5.7-.3c-26.5 0-48 21.5-48 48s21.5 48 48 48c14.4 0 27.3-6.3 36.1-16.3l78.5 15.7c6.4 19 24.4 32.6 45.5 32.6 26.5 0 48-21.5 48-48 0-24.2-17.9-44.2-41.2-47.5l-33.1-82.8c6.4-8.2 10.3-18.5 10.3-29.7zm-22.7 127.8-75.8-15.2c-.4-1.2-.8-2.3-1.3-3.5l45.4-60.6 31.7 79.2z"})
  );
}

export default LanChartRadarSolid;
