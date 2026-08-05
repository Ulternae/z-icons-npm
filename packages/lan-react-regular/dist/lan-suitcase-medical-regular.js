import React from 'react';

export function LanSuitcaseMedicalRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M192 56v40h128V56c0-4.4-3.6-8-8-8H200c-4.4 0-8 3.6-8 8m-48 40V56c0-30.9 25.1-56 56-56h112c30.9 0 56 25.1 56 56v40h80c35.3 0 64 28.7 64 64v256c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64zm200 48H144v288h224V144zm72 0v288h32c8.8 0 16-7.2 16-16V160c0-8.8-7.2-16-16-16zM96 432V144H64c-8.8 0-16 7.2-16 16v256c0 8.8 7.2 16 16 16zm148-224h24c8.8 0 16 7.2 16 16v36h36c8.8 0 16 7.2 16 16v24c0 8.8-7.2 16-16 16h-36v36c0 8.8-7.2 16-16 16h-24c-8.8 0-16-7.2-16-16v-36h-36c-8.8 0-16-7.2-16-16v-24c0-8.8 7.2-16 16-16h36v-36c0-8.8 7.2-16 16-16"})
  );
}

export default LanSuitcaseMedicalRegular;
