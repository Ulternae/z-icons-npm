import React from 'react';

export const LanBinaryCircleCheckSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M400 32v128h16c17.7 0 32 14.3 32 32 0 6-1.6 11.6-4.5 16.3-3.8-.2-7.7-.3-11.5-.3-27.3 0-53.3 5.7-76.9 16H320c-17.7 0-32-14.3-32-32s14.3-32 32-32h16V76.4l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.6-1.7 28.9 4.3S400 21.7 400 32M176 320v128h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32s14.3-32 32-32h16v-83.6l-5.9 2c-16.8 5.6-34.9-3.5-40.5-20.2s3.5-34.9 20.2-40.5l48-16c9.8-3.3 20.5-1.6 28.8 4.4S176 309.7 176 320M64 64c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v96c0 35.3-28.7 64-64 64h-64c-35.3 0-64-28.7-64-64zm128 0h-64v96h64zm96 336a144 144 0 1 1 288 0 144 144 0 1 1-288 0m201.4-60.9c-7.1-5.2-17.2-3.6-22.4 3.5l-53 72.9-26.8-26.8c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l40 40c3.3 3.3 7.9 5 12.6 4.6s8.9-2.8 11.7-6.5l64-88c5.2-7.1 3.6-17.2-3.5-22.3"})
);

export default LanBinaryCircleCheckSolid;
