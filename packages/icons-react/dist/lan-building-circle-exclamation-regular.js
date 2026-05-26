import React from 'react';

export const LanBuildingCircleExclamationRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M96 48h256c8.8 0 16 7.2 16 16v154.9c15.2-5.4 31.3-8.9 48-10.3V64c0-35.3-28.7-64-64-64H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h180c-22.7-31.5-36-70.2-36-112 0-16.4 2.1-32.3 5.9-47.5-1.9-.4-3.9-.5-5.9-.5h-32c-17.7 0-32 14.3-32 32v80H96c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16m224 192c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h4c12.2-16.9 27-31.8 44-44zM128 112v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zM128 240v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16m304 304a144 144 0 1 0 0-288 144 144 0 1 0 0 288m0-100a20 20 0 1 1 0 40 20 20 0 1 1 0-40m0-140c8.8 0 16 7.2 16 16v80c0 8.8-7.2 16-16 16s-16-7.2-16-16v-80c0-8.8 7.2-16 16-16"})
);

export default LanBuildingCircleExclamationRegular;
