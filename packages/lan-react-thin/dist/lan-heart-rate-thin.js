import React from 'react';

export function LanHeartRateThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M287.8 0c3.8-.1 7.1 2.5 8 6.1l90.1 375.6L440.6 245c1.2-3 4.2-5 7.4-5h120c4.4 0 8 3.6 8 8s-3.6 8-8 8H453.4l-62 155c-1.3 3.2-4.5 5.3-8 5s-6.4-2.7-7.2-6.1L288.8 45.8l-89 459.7c-.7 3.7-3.9 6.4-7.6 6.5s-7.1-2.4-8-6.1L121.8 256H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h120c3.7 0 6.9 2.5 7.8 6.1L191 467 280.1 6.5c.7-3.7 3.9-6.4 7.7-6.5"})
  );
}

export default LanHeartRateThin;
