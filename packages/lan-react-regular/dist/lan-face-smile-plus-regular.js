import React from 'react';

export function LanFaceSmilePlusRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -64 640 576',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M568-40c0-13.3-10.7-24-24-24s-24 10.7-24 24V8h-48c-13.3 0-24 10.7-24 24s10.7 24 24 24h48v48c0 13.3 10.7 24 24 24s24-10.7 24-24V56h48c13.3 0 24-10.7 24-24S629.3 8 616 8h-48zM240 80a192 192 0 1 1 0 384 192 192 0 1 1 0-384m0 432a240 240 0 1 0 0-480 240 240 0 1 0 0 480m-90.6-190.1c-7.8-10.7-22.8-13.1-33.5-5.3s-13.1 22.8-5.3 33.5C139.7 390 186.8 416 240 416s100.3-26 129.4-65.9c7.8-10.7 5.4-25.7-5.3-33.5s-25.7-5.4-33.5 5.3c-20.4 28-53.4 46.1-90.6 46.1s-70.2-18.1-90.6-46.1M192 224a32 32 0 1 0-64 0 32 32 0 1 0 64 0m128 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64"})
  );
}

export default LanFaceSmilePlusRegular;
