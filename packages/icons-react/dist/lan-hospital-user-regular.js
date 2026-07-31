import React from 'react';

export const LanHospitalUserRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M384 48H128c-8.8 0-16 7.2-16 16v384c0 8.8 7.2 16 16 16h80v-80c0-17.7 14.3-32 32-32h32c17.7 0 32 14.3 32 32v128H128c-35.3 0-64-28.7-64-64V64c0-35.3 28.7-64 64-64h256c35.3 0 64 28.7 64 64v121.3c-18.6 7.5-35 19.3-48 34V64c0-8.8-7.2-16-16-16m32 256a80 80 0 1 1 160 0 80 80 0 1 1-160 0m-64 208c0-53 43-96 96-96h96c53 0 96 43 96 96 0 17.7-14.3 32-32 32H384c-17.7 0-32-14.3-32-32M232 104c0-8.8 7.2-16 16-16h16c8.8 0 16 7.2 16 16v32h32c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16h-32v32c0 8.8-7.2 16-16 16h-16c-8.8 0-16-7.2-16-16v-32h-32c-8.8 0-16-7.2-16-16v-16c0-8.8 7.2-16 16-16h32z"})
);

export default LanHospitalUserRegular;
