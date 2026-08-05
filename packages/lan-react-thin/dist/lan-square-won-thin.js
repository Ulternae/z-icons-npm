import React from 'react';

export function LanSquareWonThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm224 32c3.6 0 6.8 2.4 7.7 5.9L260 240h61.8l30.5-98.4c1.3-4.2 5.8-6.6 10-5.3s6.6 5.8 5.3 10l-29 93.7H360c4.4 0 8 3.6 8 8s-3.6 8-8 8h-26.4l-38 122.4c-1.1 3.4-4.2 5.7-7.8 5.6s-6.6-2.5-7.6-5.9L247.7 256h-47.4l-32.6 122.1c-.9 3.4-4 5.9-7.6 5.9s-6.7-2.2-7.8-5.6L114.4 256H88c-4.4 0-8-3.6-8-8s3.6-8 8-8h21.4l-29.1-93.6c-1.3-4.2 1-8.7 5.3-10s8.7 1 10 5.3l30.5 98.4h61.8L216.2 134c.9-3.5 4.1-5.9 7.7-5.9zm64.6 219.1 28.3-91.1h-52.6zm-64.6-180L204.5 240h38.9zM131.1 256l28.3 91.1 24.3-91.1z"})
  );
}

export default LanSquareWonThin;
