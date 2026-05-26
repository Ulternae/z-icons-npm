import React from 'react';

export const LanTicketsSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 96c0-35.3 28.7-64 64-64h384c35.3 0 64 28.7 64 64v48c0 8.8-7.4 15.7-15.7 18.6C573.5 169.1 560 187 560 208s13.5 38.9 32.3 45.4c8.3 2.9 15.7 9.8 15.7 18.6v48c0 35.3-28.7 64-64 64H160c-35.3 0-64-28.7-64-64v-48c0-8.8 7.4-15.7 15.7-18.6C130.5 246.9 144 229 144 208s-13.5-38.9-32.3-45.4c-8.3-2.9-15.7-9.8-15.7-18.6zm352 176H256c-8.8 0-16-7.2-16-16v-96c0-8.8 7.2-16 16-16h192c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16M232 96c-22.1 0-40 17.9-40 40v144c0 22.1 17.9 40 40 40h240c22.1 0 40-17.9 40-40V136c0-22.1-17.9-40-40-40zM48 152v264c0 8.8 7.2 16 16 16h424c13.3 0 24 10.7 24 24s-10.7 24-24 24H64c-35.3 0-64-28.7-64-64V152c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanTicketsSolid;
