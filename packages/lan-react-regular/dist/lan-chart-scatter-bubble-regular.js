import React from 'react';

export function LanChartScatterBubbleRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 32c13.3 0 24 10.7 24 24v344c0 17.7 14.3 32 32 32h408c13.3 0 24 10.7 24 24s-10.7 24-24 24H80c-44.2 0-80-35.8-80-80V56c0-13.3 10.7-24 24-24m152 224a48 48 0 1 1 0 96 48 48 0 1 1 0-96m200 32a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48-160a48 48 0 1 1 0 96 48 48 0 1 1 0-96m168 0a24 24 0 1 0-48 0 24 24 0 1 0 48 0m-88 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
  );
}

export default LanChartScatterBubbleRegular;
