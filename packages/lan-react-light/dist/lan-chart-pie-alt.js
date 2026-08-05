import React from 'react';

export function LanChartPieAlt({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M304 208V34.4c89.2 13.8 159.8 84.4 173.6 173.6zm176 32c17.7 0 32.2-14.4 29.9-31.9-14.2-107-99-191.7-206-206C286.4-.2 272 14.3 272 32v176c0 17.7 14.3 32 32 32zM32 272c0-98.3 68.3-180.8 160-202.4V272c0 26.5 21.5 48 48 48h202.4C420.8 411.7 338.3 480 240 480c-114.9 0-208-93.1-208-208M224 68.7c0-19-17.3-35.3-37.7-30.7C79.6 62.4 0 157.9 0 272c0 132.6 107.5 240 240 240 114.1 0 209.6-79.6 234-186.3 4.6-20.4-11.7-37.7-30.7-37.7H240c-8.8 0-16-7.2-16-16z"})
  );
}

export default LanChartPieAlt;
