import React from 'react';

export const LanImageBrokenThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M219.5 32c2.4 0 4.7 1.1 6.2 2.9l87.8 106.3c4.2 5.1 6.6 11.6 6.6 18.2 0 7.6-3 14.9-8.4 20.3l-164 163.9c-2.4 2.4-3.7 5.6-3.7 9 0 2.9 1 5.8 2.9 8.1L234.7 467c2 2.4 2.4 5.7 1.1 8.5s-4.1 4.6-7.2 4.6L64 480c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64zM384 32c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64h-76.2l-13.2-16H384c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48h-85.3l-13.2-16zM64 48c-26.5 0-48 21.5-48 48v320c0 26.5 21.5 48 48 48h147.5l-77-93.2c-4.2-5.1-6.6-11.6-6.6-18.2 0-7.6 3-14.9 8.4-20.3l164-163.9c2.4-2.4 3.7-5.6 3.7-9 0-2.9-1-5.8-2.9-8.1L215.7 48zm316 320.5c5.5 9.9 5.4 22-.4 31.8S363.3 416 352 416h-97.1l-13.2-16H352c5.7 0 10.9-3 13.8-7.9s2.9-10.9.2-15.9l-65.4-117.7 11.8-11.8L380 368.4zM128 208a48 48 0 1 1 0-96 48 48 0 1 1 0 96m0-80a32 32 0 1 0 0 64 32 32 0 1 0 0-64"})
);

export default LanImageBrokenThin;
