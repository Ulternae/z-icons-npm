import React from 'react';

export const LanHockeySticksRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M584 320c30.9 0 56 25.1 56 56v80c0 30.9-25.1 56-56 56H477.1c-46.6 0-89-27-108.7-69.2L346.5 396l35.6-76zM435.4-20.4c6.2-10.4 19.5-14.7 30.8-9.4s16.5 18.2 12.5 29.7l-.9 2.2-206.1 440.7C251.9 485 209.5 512 162.9 512H56c-30.9 0-56-25.1-56-56v-80c0-30.9 25.1-56 56-56h220.1L434.3-18.2l1.2-2.2zm-23.5 442.9c11.8 25.3 37.3 41.5 65.2 41.5H496v-96H386.4zM544 464h40c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8h-40zM56 368c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h40v-96zm88 96h18.9c27.9 0 53.4-16.2 65.2-41.5l25.5-54.5H144zm29.8-493.7c11.3-5.3 24.5-1 30.7 9.4l1.2 2.2 87.8 187.6-26.5 56.7L162.3 2.3l-.9-2.2c-4-11.5 1.2-24.4 12.5-29.7z"})
);

export default LanHockeySticksRegular;
