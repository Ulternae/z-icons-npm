import React from 'react';

export const LanChartFftSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64v336c0 44.2 35.8 80 80 80h400c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16zm220.6 17.7c-5.7-11.5-17.8-18.4-30.5-17.6s-23.9 9.1-28.2 21.2L153.4 288H144c-17.7 0-32 14.3-32 32s14.3 32 32 32h32c13.5 0 25.6-8.5 30.1-21.2l54.8-153.4 30.5 60.9c5.4 10.8 16.5 17.7 28.6 17.7h60.2l39.2 78.3c7.9 15.8 27.1 22.2 42.9 14.3s22.2-27.1 14.3-42.9l-48-96c-5.4-10.9-16.5-17.7-28.6-17.7h-60.2z"})
);

export default LanChartFftSolid;
