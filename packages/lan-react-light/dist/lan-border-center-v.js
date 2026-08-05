import React from 'react';

export function LanBorderCenterV({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M208 464c0 8.8 7.2 16 16 16s16-7.2 16-16V48c0-8.8-7.2-16-16-16s-16 7.2-16 16zM56 448a24 24 0 1 0-48 0 24 24 0 1 0 48 0m384 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M56 352a24 24 0 1 0-48 0 24 24 0 1 0 48 0m384 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48-192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-336 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m336 96a24 24 0 1 0 48 0 24 24 0 1 0-48 0m-336 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0M392 64a24 24 0 1 0 48 0 24 24 0 1 0-48 0M8 64a24 24 0 1 0 48 0 24 24 0 1 0-48 0m288 192a24 24 0 1 0 48 0 24 24 0 1 0-48 0m48-192a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0M152 64a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-48 384a24 24 0 1 0 48 0 24 24 0 1 0-48 0m48-192a24 24 0 1 0-48 0 24 24 0 1 0 48 0"})
  );
}

export default LanBorderCenterV;
