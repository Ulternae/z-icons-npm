import React from 'react';

export function LanFaceMonocleThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 476c-29.4 12.8-61.9 20-96 20-132.5 0-240-107.5-240-240S123.5 16 256 16s240 107.5 240 240c0 71.1-30.9 134.9-80 178.9V224c0-61.9-50.1-112-112-112s-112 50.1-112 112 50.1 112 112 112c40.7 0 76.4-21.8 96-54.3V504c0 4.4 3.6 8 8 8s8-3.6 8-8v-48.1c58.5-46.9 96-119 96-199.9C512 114.6 397.4 0 256 0S0 114.6 0 256s114.6 256 256 256c33.9 0 66.4-6.6 96-18.6zM128 176a16 16 0 1 0-32 0 16 16 0 1 0 32 0m144 32a16 16 0 1 0 0-32 16 16 0 1 0 0 32m32 112a96 96 0 1 1 0-192 96 96 0 1 1 0 192m-168 32c-4.4 0-8 3.6-8 8s3.6 8 8 8h19.2c40.6 0 78.7 19.6 102.3 52.6 2.6 3.6 7.6 4.4 11.2 1.9s4.4-7.6 1.9-11.2C243.9 374.1 201 352 155.2 352z"})
  );
}

export default LanFaceMonocleThin;
