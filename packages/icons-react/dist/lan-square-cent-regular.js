import React from 'react';

export const LanSquareCentRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M64 80c-8.8 0-16 7.2-16 16v320c0 8.8 7.2 16 16 16h320c8.8 0 16-7.2 16-16V96c0-8.8-7.2-16-16-16zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm248 32v10.7c21.8 4.7 41.5 15.3 57.1 30.1 9.6 9.1 10.1 24.3 1 33.9s-24.3 10.1-33.9 1c-12.9-12.2-30.3-19.6-49.4-19.6-39.8 0-72 32.2-72 72s32.2 72 72 72c19.1 0 36.5-7.4 49.4-19.6 9.6-9.1 24.8-8.7 33.9 1s8.7 24.8-1 33.9c-15.6 14.8-35.3 25.4-57.1 30.1v10.7c0 13.3-10.7 24-24 24s-24-10.7-24-24V374c-55.4-10.6-97.3-59.4-97.3-117.8s41.9-107.4 97.3-118V128c0-13.3 10.7-24 24-24s24 10.7 24 24"})
);

export default LanSquareCentRegular;
