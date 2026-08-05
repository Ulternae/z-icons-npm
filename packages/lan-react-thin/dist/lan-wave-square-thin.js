import React from 'react';

export function LanWaveSquareThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M104 80c-4.4 0-8 3.6-8 8v160c0 13.3-10.7 24-24 24H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h64c4.4 0 8-3.6 8-8V88c0-13.3 10.7-24 24-24h136c13.3 0 24 10.7 24 24v336c0 4.4 3.6 8 8 8h136c4.4 0 8-3.6 8-8V264c0-13.3 10.7-24 24-24h64c4.4 0 8 3.6 8 8s-3.6 8-8 8h-64c-4.4 0-8 3.6-8 8v160c0 13.3-10.7 24-24 24H272c-13.3 0-24-10.7-24-24V88c0-4.4-3.6-8-8-8z"})
  );
}

export default LanWaveSquareThin;
