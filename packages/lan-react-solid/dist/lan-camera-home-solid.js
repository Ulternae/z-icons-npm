import React from 'react';

export function LanCameraHomeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 0C28.7 0 0 28.7 0 64v288c0 35.3 28.7 64 64 64h136v48h-80c-13.3 0-24 10.7-24 24s10.7 24 24 24h208c13.3 0 24-10.7 24-24s-10.7-24-24-24h-80v-48h136c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zm160 96a112 112 0 1 1 0 224 112 112 0 1 1 0-224"})
  );
}

export default LanCameraHomeSolid;
