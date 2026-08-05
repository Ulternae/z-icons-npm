import React from 'react';

export function LanBatteryExclamationThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 640 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M243.4 64c-1.2 5-1.8 10.3-1.7 15.7v.3H111.9c-35.3 0-64 28.7-64 64v224c0 35.3 28.7 64 64 64h128c0 5.5.8 10.9 2.1 16H112c-44.2 0-80-35.8-80-80V144c0-44.2 35.8-80 80-80zM304 448a16 16 0 1 1 0-32 16 16 0 1 1 0 32M512 64c44.2 0 80 35.8 80 80v32h16c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32h-16v32c0 44.2-35.8 80-80 80H365.9c1.3-5.1 2.1-10.5 2.1-16h144c35.3 0 64-28.7 64-64V144c0-35.3-28.7-64-64-64H366.2v-.3c.1-5.4-.5-10.7-1.7-15.7zm-205.1.3c6.6 1.4 11.5 7.3 11.3 14.3L312 344.2c-.1 4.3-3.7 7.8-8 7.8s-7.9-3.5-8-7.8l-6.2-265.6c-.2-8 6.2-14.6 14.2-14.6zM592 320h16c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16h-16z"})
  );
}

export default LanBatteryExclamationThin;
