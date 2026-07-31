import React from 'react';

export const LanFilePptThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 544',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 16h133.5q5.4 0 10.5 1.2V120c0 30.9 25.1 56 56 56h102.8q1.2 5.1 1.2 10.5V336h16V186.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H96C60.7 0 32 28.7 32 64v384c0 35.3 28.7 64 64 64h80v-16H96c-26.5 0-48-21.5-48-48V64c0-26.5 21.5-48 48-48m296 144h-96c-22.1 0-40-17.9-40-40V24c2.7 1.8 5.1 3.8 7.4 6.1l122.5 122.5c2.3 2.3 4.3 4.8 6.1 7.4M240 400c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h24c26.5 0 48-21.5 48-48s-21.5-48-48-48zm32 80h-24v-64h24c17.7 0 32 14.3 32 32s-14.3 32-32 32m96-80c-4.4 0-8 3.6-8 8v128c0 4.4 3.6 8 8 8s8-3.6 8-8v-40h24c26.5 0 48-21.5 48-48s-21.5-48-48-48zm32 80h-24v-64h24c17.7 0 32 14.3 32 32s-14.3 32-32 32m88-72c0 4.4 3.6 8 8 8h24v120c0 4.4 3.6 8 8 8s8-3.6 8-8V416h24c4.4 0 8-3.6 8-8s-3.6-8-8-8h-64c-4.4 0-8 3.6-8 8"})
);

export default LanFilePptThin;
