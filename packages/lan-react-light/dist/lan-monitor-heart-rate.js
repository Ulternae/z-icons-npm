import React from 'react';

export function LanMonitorHeartRate({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 96c-17.7 0-32 14.3-32 32v128h112c5.6 0 10.8 2.9 13.7 7.8l32.3 53.9 67.4-148.3c2.6-5.6 8.1-9.3 14.3-9.4s11.8 3.3 14.6 8.8l43.6 87.2H400c8.8 0 16 7.2 16 16s-7.2 16-16 16h-80c-6.1 0-11.6-3.4-14.3-8.8l-33-66-66.1 145.5c-2.5 5.4-7.7 9-13.7 9.4s-11.6-2.6-14.6-7.7L134.9 288H32v96c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32zM0 128c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
  );
}

export default LanMonitorHeartRate;
