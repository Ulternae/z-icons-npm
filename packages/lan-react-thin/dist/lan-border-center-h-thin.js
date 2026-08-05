import React from 'react';

export function LanBorderCenterHThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 248c-4.4 0-8 3.6-8 8s3.6 8 8 8h432c4.4 0 8-3.6 8-8s-3.6-8-8-8zM32 80a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 384a16 16 0 1 0 0-32 16 16 0 1 0 0 32m96-384a16 16 0 1 0 0-32 16 16 0 1 0 0 32m0 384a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192-32a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m-96 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-352a16 16 0 1 0 0-32 16 16 0 1 0 0 32m192 352a16 16 0 1 0 0 32 16 16 0 1 0 0-32m0-384a16 16 0 1 0 0 32 16 16 0 1 0 0-32M224 336a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 336a16 16 0 1 0 0 32 16 16 0 1 0 0-32m384-160a16 16 0 1 0 0-32 16 16 0 1 0 0 32M32 144a16 16 0 1 0 0 32 16 16 0 1 0 0-32m192 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32"})
  );
}

export default LanBorderCenterHThin;
