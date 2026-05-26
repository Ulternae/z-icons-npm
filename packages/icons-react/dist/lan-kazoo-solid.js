import React from 'react';

export const LanKazooSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M393.4-22.6c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3L470.3 247c-9.9 65.5-61.7 117.4-127.3 127.3l-48.4 48.4c-1.8 1.8-3.9 3.5-6.2 4.8l-160 96c-12.6 7.6-28.7 5.6-39.1-4.8l-64-64C15 444.2 13 428.1 20.6 415.5l96-160c1.3-2.2 3-4.3 4.8-6.2l48.3-48.3c10-65.5 61.8-117.3 127.3-127.3l96.4-96.4zM320 328a104 104 0 1 0 0-208 104 104 0 1 0 0 208m20-149.2v25.3h25.3c11 0 20 9 20 20s-9 20-20 20H340v25.3c0 11-9 20-20 20s-20-9-20-20v-25.3h-25.3c-11 0-20-9-20-20s9-20 20-20H300v-25.3c0-11 9-20 20-20s20 9 20 20"})
);

export default LanKazooSolid;
