import React from 'react';

export const LanCalendarUsersThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M216 0c4.4 0 8 3.6 8 8v56h192V8c0-4.4 3.6-8 8-8s8 3.6 8 8v56h48c35.3 0 64 28.7 64 64v81.1c-5.2-.7-10.6-1.1-16-1.1v-16H112v16c-5.4 0-10.8.4-16 1.1V128c0-35.3 28.7-64 64-64h48V8c0-4.4 3.6-8 8-8m154.4 464c-1.1 5.2-1.8 10.6-2.1 16h-96.5c-.4-5.4-1.1-10.8-2.1-16h100.8zM208 104V80h-48c-26.5 0-48 21.5-48 48v48h416v-48c0-26.5-21.5-48-48-48h-48v24c0 4.4-3.6 8-8 8s-8-3.6-8-8V80H224v24c0 4.4-3.6 8-8 8s-8-3.6-8-8m-48 216a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-112 0a64 64 0 1 1 128 0 64 64 0 1 1-128 0m24 96h80c39.8 0 72 32.2 72 72v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56H72c-30.9 0-56 25.1-56 56v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-39.8 32.2-72 72-72m456-48a48 48 0 1 0 0-96 48 48 0 1 0 0 96m0-112a64 64 0 1 1 0 128 64 64 0 1 1 0-128M416 488c0-39.8 32.2-72 72-72h80c39.8 0 72 32.2 72 72v16c0 4.4-3.6 8-8 8s-8-3.6-8-8v-16c0-30.9-25.1-56-56-56h-80c-30.9 0-56 25.1-56 56v16c0 4.4-3.6 8-8 8s-8-3.6-8-8z"})
);

export default LanCalendarUsersThin;
