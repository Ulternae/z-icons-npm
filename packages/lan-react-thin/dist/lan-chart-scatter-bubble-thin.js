import React from 'react';

export function LanChartScatterBubbleThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M8 32c4.4 0 8 3.6 8 8v360c0 35.3 28.7 64 64 64h424c4.4 0 8 3.6 8 8s-3.6 8-8 8H80c-44.2 0-80-35.8-80-80V40c0-4.4 3.6-8 8-8m168 304a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m224 32a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48-80a32 32 0 1 0 0-64 32 32 0 1 0 0 64m0-80a48 48 0 1 1 0 96 48 48 0 1 1 0-96m192 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
  );
}

export default LanChartScatterBubbleThin;
