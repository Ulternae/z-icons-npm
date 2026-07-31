import React from 'react';

export const LanHeadSideGogglesThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M16.2 208h220.7c-8.2-14.1-12.8-30.5-12.8-48s4.7-33.9 12.8-48H45.1c-17.2 28.2-27.6 60.9-29 96zm232.3 16H.1c-.1-2.7-.1-5.3-.1-8C0 96.7 96.7 0 216 0c60 0 114.3 24.5 153.5 64H448c35.3 0 64 28.7 64 64v64c0 22.7-11.8 42.6-29.6 54l.9 1c8.2 8.9 12.7 20.6 12.7 32.6 0 26.7-21.6 48.3-48.3 48.3H424v48c0 39.8-32.2 72-72 72h-32v56c0 4.4-3.6 8-8 8s-8-3.6-8-8v-64c0-4.4 3.6-8 8-8h40c30.9 0 56-25.1 56-56v-56c0-4.4 3.6-8 8-8h31.7c17.8 0 32.3-14.5 32.3-32.3 0-8.1-3-15.9-8.5-21.8l-4.4-4.8c-6 1.9-12.5 2.9-19.1 2.9H320c-28.4 0-54-12.4-71.6-32zM346 64c-35-29.9-80.4-48-130-48-65.4 0-123.5 31.4-160 80h192.5C266 76.4 291.6 64 320 64zM80 383.8C45.2 355.5 19.3 316.6 7.3 272h16.6c11.9 40.8 36.4 76.2 69 101.7 1.9 1.5 3.1 3.8 3.1 6.3v124c0 4.4-3.6 8-8 8s-8-3.6-8-8zM320 80c-44.2 0-80 35.8-80 80s35.8 80 80 80h128c26.5 0 48-21.5 48-48v-64c0-26.5-21.5-48-48-48z"})
);

export default LanHeadSideGogglesThin;
