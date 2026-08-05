import React from 'react';

export function LanVault({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm352 432v-16H96v16c0 8.8-7.2 16-16 16s-16-7.2-16-16v-16c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64v16c0 8.8-7.2 16-16 16s-16-7.2-16-16m-96-240a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-256 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m336-96c8.8 0 16 7.2 16 16v160c0 8.8-7.2 16-16 16s-16-7.2-16-16V176c0-8.8 7.2-16 16-16m-192 32a64 64 0 1 1 0 128 64 64 0 1 1 0-128m32 64a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
  );
}

export default LanVault;
