import React from 'react';

export const LanBlanketRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M48 120c0-22.1 17.9-40 40-40h272c22.1 0 40 17.9 40 40v124.1c-7.5-2.7-15.6-4.1-24-4.1H120c-27 0-51.9 8.9-72 24zM.3 368C4.4 430.5 56.4 480 120 480h304c13.3 0 24-10.7 24-24s-10.7-24-24-24H120c-39.8 0-72-32.2-72-72s32.2-72 72-72h256c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h256c39.8 0 72-32.2 72-72V120c0-48.6-39.4-88-88-88H88C39.4 32 0 71.4 0 120v248z"})
);

export default LanBlanketRegular;
