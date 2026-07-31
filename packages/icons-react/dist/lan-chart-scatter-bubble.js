import React from 'react';

export const LanChartScatterBubble = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16 32c8.8 0 16 7.2 16 16v352c0 26.5 21.5 48 48 48h416c8.8 0 16 7.2 16 16s-7.2 16-16 16H80c-44.2 0-80-35.8-80-80V48c0-8.8 7.2-16 16-16m160 291.2a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 1 0 0 38.4m0-67.2a48 48 0 1 1 0 96 48 48 0 1 1 0-96m208 32a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m-48-92.8a19.2 19.2 0 1 0 0-38.4 19.2 19.2 0 1 0 0 38.4m0-67.2a48 48 0 1 1 0 96 48 48 0 1 1 0-96m176 0a32 32 0 1 0-64 0 32 32 0 1 0 64 0m-96 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0"})
);

export default LanChartScatterBubble;
