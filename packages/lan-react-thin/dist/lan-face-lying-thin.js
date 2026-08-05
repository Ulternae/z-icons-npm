import React from 'react';

export function LanFaceLyingThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M491.1 384C448.5 451.3 373.5 496 288 496 155.5 496 48 388.5 48 256S155.5 16 288 16c124.9 0 227.5 95.4 238.9 217.3-8.9-5.9-19.5-9.3-30.9-9.3H320c-4.4 0-8 3.6-8 8s3.6 8 8 8h176c22.1 0 40 17.9 40 40s-17.9 40-40 40h-96c-4.4 0-8 3.6-8 8s3.6 8 8 8h96c30.9 0 56-25.1 56-56 0-10.6-2.9-20.5-8-28.9C541.4 112 427.8 0 288 0 146.6 0 32 114.6 32 256s114.6 256 256 256c94.8 0 177.5-51.5 221.8-128zM224 176a16 16 0 1 0-32 0 16 16 0 1 0 32 0m144 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32M240 368h72c4.4 0 8-3.6 8-8s-3.6-8-8-8h-72c-26.5 0-48 21.5-48 48v8c0 4.4 3.6 8 8 8s8-3.6 8-8v-8c0-17.7 14.3-32 32-32"})
  );
}

export default LanFaceLyingThin;
