import React from 'react';

export function LanCodeCommitThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M288 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224m127.8-104C411.6 331 356 384 288 384s-123.6-53-127.8-120H8c-4.4 0-8-3.6-8-8s3.6-8 8-8h152.2c4.2-67 59.8-120 127.8-120s123.6 53 127.8 120H568c4.4 0 8 3.6 8 8s-3.6 8-8 8z"})
  );
}

export default LanCodeCommitThin;
