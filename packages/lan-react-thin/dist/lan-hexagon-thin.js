import React from 'react';

export function LanHexagonThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m47.4 228.2 96.2-168c10-17.4 28.5-28.2 48.6-28.2h191.6c20.1 0 38.6 10.8 48.6 28.2l96.2 168.1c9.9 17.2 9.9 38.4 0 55.6l-96.2 168c-10 17.4-28.5 28.2-48.6 28.2H192.2c-20.1 0-38.6-10.8-48.6-28.2l-96.2-168c-9.9-17.2-9.9-38.4 0-55.6zm-13.9-7.9c-12.7 22.2-12.7 49.4 0 71.5l96.2 168.1c12.8 22.4 36.7 36.2 62.5 36.2h191.6c25.8 0 49.7-13.8 62.5-36.2l96.2-168.1c12.7-22.2 12.7-49.4 0-71.5L446.3 52.2C433.5 29.8 409.6 16 383.8 16H192.2c-25.8 0-49.7 13.8-62.5 36.2z"})
  );
}

export default LanHexagonThin;
