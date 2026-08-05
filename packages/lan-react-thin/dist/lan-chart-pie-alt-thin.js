import React from 'react';

export function LanChartPieAltThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M301.8 18c99.8 13.3 179 92.4 192.2 192.2.9 6.5-4.5 13.8-14 13.8H304c-8.8 0-16-7.2-16-16V32c0-9.5 7.3-14.9 13.8-14M480 240c17.7 0 32.2-14.4 29.9-31.9-14.2-107-99-191.7-206-206C286.4-.2 272 14.3 272 32v176c0 17.7 14.3 32 32 32zM199.9 51.6c4-.7 8.1 2.4 8.1 7.4v205c0 22.1 17.9 40 40 40h205c4.9 0 8.1 4.1 7.4 8.1C441.5 416.7 350 496 240 496 116.3 496 16 395.7 16 272 16 162 95.3 70.5 199.9 51.6M224 59c0-14-12.3-25.8-27-23.1C85 56.2 0 154.2 0 272.1c0 132.5 107.5 240 240 240 117.9 0 215.9-85 236.2-197 2.6-14.7-9.1-27-23.1-27h-205c-13.3 0-24-10.7-24-24v-205z"})
  );
}

export default LanChartPieAltThin;
