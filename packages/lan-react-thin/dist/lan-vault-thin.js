import React from 'react';

export function LanVaultThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h384c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48zm368 456v-24H80v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64v24c0 4.4-3.6 8-8 8s-8-3.6-8-8m-96-248a128 128 0 1 0-256 0 128 128 0 1 0 256 0m-272 0a144 144 0 1 1 288 0 144 144 0 1 1-288 0m344-96c4.4 0 8 3.6 8 8v176c0 4.4-3.6 8-8 8s-8-3.6-8-8V168c0-4.4 3.6-8 8-8m-200 48a48 48 0 1 1 0 96 48 48 0 1 1 0-96m32 48a32 32 0 1 0-64 0 32 32 0 1 0 64 0"})
  );
}

export default LanVaultThin;
