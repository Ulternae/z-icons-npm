import React from 'react';

export const LanPipeCircleCheckRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M56 96c13.3 0 24 10.7 24 24v8h416v-8c0-13.3 10.7-24 24-24s24 10.7 24 24v124c-14.6-10.5-30.7-19-48-25.1V176H80v160h170.9c-5.4 15.2-8.9 31.3-10.3 48H79.9v8c0 13.3-10.7 24-24 24s-24-10.7-24-24V120c0-13.3 10.7-24 24-24zm232 304a144 144 0 1 1 288 0 144 144 0 1 1-288 0m201.4-60.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.3"})
);

export default LanPipeCircleCheckRegular;
