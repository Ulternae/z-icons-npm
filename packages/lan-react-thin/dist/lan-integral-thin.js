import React from 'react';

export function LanIntegralThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 320 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M236 16c-37.6 0-68 30.4-68 68v344c0 46.4-37.6 84-84 84S0 474.4 0 428v-36c0-4.4 3.6-8 8-8s8 3.6 8 8v36c0 37.6 30.4 68 68 68s68-30.4 68-68V84c0-46.4 37.6-84 84-84s84 37.6 84 84v36c0 4.4-3.6 8-8 8s-8-3.6-8-8V84c0-37.6-30.4-68-68-68"})
  );
}

export default LanIntegralThin;
