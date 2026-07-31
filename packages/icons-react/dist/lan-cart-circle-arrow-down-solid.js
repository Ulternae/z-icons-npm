import React from 'react';

export const LanCartCircleArrowDownSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -16 640 560',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M24-16C10.7-16 0-5.3 0 8s10.7 24 24 24h45.3c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1h104.6c1.4-16.7 4.9-32.8 10.3-48H200.1c-11.6 0-21.5-8.3-23.6-19.7l-5.2-28.3H340c34.9-48.5 91.7-80 156-80 15.8 0 31.2 1.9 46 5.5l26.9-143.6c3.7-19.7-11.4-37.9-31.5-37.9H124.7l-.4-2c-4.8-26.6-28-46-55.1-46zm184 528a48 48 0 1 0 0-96 48 48 0 1 0 0 96m288 32a144 144 0 1 0 0-288 144 144 0 1 0 0 288m67.3-147.3c6.2 6.2 6.2 16.4 0 22.6l-56 56c-6.2 6.2-16.4 6.2-22.6 0l-56-56c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l28.7 28.7V336c0-8.8 7.2-16 16-16s16 7.2 16 16v89.4l28.7-28.7c6.2-6.2 16.4-6.2 22.6 0"})
);

export default LanCartCircleArrowDownSolid;
