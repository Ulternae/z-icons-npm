import React from 'react';

export const LanCalendarRangeThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 448 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M128 8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H64C28.7 64 0 92.7 0 128v288c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64h-48V8c0-4.4-3.6-8-8-8s-8 3.6-8 8v56H128zm-16 72v24c0 4.4 3.6 8 8 8s8-3.6 8-8V80h192v24c0 4.4 3.6 8 8 8s8-3.6 8-8V80h48c26.5 0 48 21.5 48 48v288c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48V128c0-26.5 21.5-48 48-48zm0 144a16 16 0 1 0 32 0 16 16 0 1 0-32 0m208 112a16 16 0 1 0 0 32 16 16 0 1 0 0-32M192 216c0 4.4 3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8H200c-4.4 0-8 3.6-8 8m56 120H104c-4.4 0-8 3.6-8 8s3.6 8 8 8h144c4.4 0 8-3.6 8-8s-3.6-8-8-8"})
);

export default LanCalendarRangeThin;
