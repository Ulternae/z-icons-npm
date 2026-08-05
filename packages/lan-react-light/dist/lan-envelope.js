import React from 'react';

export function LanEnvelope({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 122.5V120h.1C1.3 88.9 27 64 58.5 64h395c31.5 0 57.1 24.9 58.4 56h.1v264c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm480 53.1L303.3 305.1c-28.2 20.6-66.5 20.6-94.6 0L32 175.6V384c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32zm0-53.1c0-14.6-11.9-26.5-26.5-26.5h-395C43.9 96 32 107.9 32 122.5c0 8.4 4 16.4 10.8 21.4l184.8 135.4c16.9 12.4 39.9 12.4 56.8 0l184.8-135.5c6.8-5 10.8-12.9 10.8-21.4z"})
  );
}

export default LanEnvelope;
