import React from 'react';

export const LanBuildingColumnsRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M269.2 11.9c-8-5.2-18.3-5.2-26.3 0l-232 152C2 169.7-2 180.7 1 190.9S13.4 208 24 208h40v160h-8c-13.3 0-24 10.7-24 24s10.7 24 24 24h400c13.3 0 24-10.7 24-24s-10.7-24-24-24h-8V208h40c10.6 0 20-7 23-17.1s-1-21.1-9.8-26.9l-232-152zM176 368h-64V208h64zm112 0h-64V208h64zm112 0h-64V208h64zM228.3 160H104.4L256 60.7 407.6 160H283.7c2.7-4.7 4.3-10.2 4.3-16 0-17.7-14.3-32-32-32s-32 14.3-32 32c0 5.8 1.6 11.3 4.3 16M0 488c0 13.3 10.7 24 24 24h464c13.3 0 24-10.7 24-24s-10.7-24-24-24H24c-13.3 0-24 10.7-24 24"})
);

export default LanBuildingColumnsRegular;
