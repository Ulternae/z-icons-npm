import React from 'react';

export const LanTicketThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 64C28.7 64 0 92.7 0 128v72.6c0 4 2.9 7.4 6.9 7.9C30.2 211.8 48 231.8 48 256s-17.9 44.2-41.1 47.5c-3.9.6-6.9 3.9-6.9 7.9V384c0 35.3 28.7 64 64 64h448c35.3 0 64-28.7 64-64v-72.6c0-4-2.9-7.4-6.9-7.9-23.3-3.3-41.1-23.3-41.1-47.5s17.9-44.2 41.1-47.5c3.9-.6 6.9-3.9 6.9-7.9V128c0-35.3-28.7-64-64-64zm-48 64c0-26.5 21.5-48 48-48h448c26.5 0 48 21.5 48 48v66c-27.6 7.1-48 32.2-48 62s20.4 54.9 48 62v66c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48v-66c27.6-7.1 48-32.2 48-62s-20.4-54.9-48-62zm144 48h256c8.8 0 16 7.2 16 16v128c0 8.8-7.2 16-16 16H160c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16m-32 16v128c0 17.7 14.3 32 32 32h256c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32H160c-17.7 0-32 14.3-32 32"})
);

export default LanTicketThin;
