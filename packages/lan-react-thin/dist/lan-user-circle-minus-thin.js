import React from 'react';

export function LanUserCircleMinusThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 544',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M112 128a112 112 0 1 1 224 0 112 112 0 1 1-224 0m240 0a128 128 0 1 0-256 0 128 128 0 1 0 256 0M16 480c0-88.4 71.6-160 160-160h81.4c2.5-5.5 5.3-10.8 8.3-16H176C78.8 304 0 382.8 0 480v24c0 4.4 3.6 8 8 8s8-3.6 8-8zm416-208a128 128 0 1 1 0 256 128 128 0 1 1 0-256m0 272a144 144 0 1 0 0-288 144 144 0 1 0 0 288m72-144c0-4.4-3.6-8-8-8H368c-4.4 0-8 3.6-8 8s3.6 8 8 8h128c4.4 0 8-3.6 8-8"})
  );
}

export default LanUserCircleMinusThin;
