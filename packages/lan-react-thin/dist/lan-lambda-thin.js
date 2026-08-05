import React from 'react';

export function LanLambdaThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h123.9c9.2 0 17.6 5.3 21.6 13.6l21.1 43.9-158 363.3c-1.8 4.1.1 8.8 4.1 10.5s8.8-.1 10.5-4.1l152.6-350.7 160.3 332.9c6.7 13.8 20.7 22.6 36 22.6H440c4.4 0 8-3.6 8-8s-3.6-8-8-8h-59.9c-9.2 0-17.6-5.3-21.6-13.6L167.9 54.6c-6.7-13.8-20.7-22.6-36-22.6z"})
  );
}

export default LanLambdaThin;
