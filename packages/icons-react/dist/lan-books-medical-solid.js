import React from 'react';

export const LanBooksMedicalSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M390.8 17c-17.1 4.6-27.2 22.1-22.6 39.2l12.4 46.4 123.6-33.1-12.4-46.4C487.3 6 469.7-4.1 452.7.4zm125.9 98.8-123.6 33.1 20.8 77.5c24.9-11.8 52.8-18.4 82.2-18.4 16.2 0 31.9 2 46.9 5.8zM352 128c0-17.7-14.3-32-32-32h-48c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h48c6.1 0 11.9-1.7 16.7-4.7C316 476.7 304 439.8 304 400c0-48.7 18.1-93.2 48-127zM64 32v48h128V32c0-17.7-14.3-32-32-32H96C78.3 0 64 14.3 64 32m0 96v256h128V128zm0 304v48c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32v-48zm432 112a144 144 0 1 0 0-288 144 144 0 1 0 0 288m-10.7-224h21.3c8.8 0 16 7.2 16 16v37.3h37.3c8.8 0 16 7.2 16 16v21.3c0 8.8-7.2 16-16 16h-37.3v37.3c0 8.8-7.2 16-16 16h-21.3c-8.8 0-16-7.2-16-16v-37.3H432c-8.8 0-16-7.2-16-16v-21.3c0-8.8 7.2-16 16-16h37.3V336c0-8.8 7.2-16 16-16"})
);

export default LanBooksMedicalSolid;
