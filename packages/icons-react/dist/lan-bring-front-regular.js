import React from 'react';

export const LanBringFrontRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -32 576 576',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 16h96c8.8 0 16 7.2 16 16v17.1c5.2-.7 10.6-1.1 16-1.1h32V32c0-35.3-28.7-64-64-64H64C28.7-32 0-3.3 0 32v96c0 35.3 28.7 64 64 64h16v-32c0-5.4.4-10.8 1.1-16H64c-8.8 0-16-7.2-16-16V32c0-8.8 7.2-16 16-16m288 464c0 35.3 28.7 64 64 64h96c35.3 0 64-28.7 64-64v-96c0-35.3-28.7-64-64-64h-16v32c0 5.4-.4 10.8-1.1 16H512c8.8 0 16 7.2 16 16v96c0 8.8-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16v-17.1c-5.2.7-10.6 1.1-16 1.1h-32zM192 96c-35.3 0-64 28.7-64 64v192c0 35.3 28.7 64 64 64h192c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64z"})
);

export default LanBringFrontRegular;
