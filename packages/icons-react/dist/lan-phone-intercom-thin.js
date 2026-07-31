import React from 'react';

export const LanPhoneIntercomThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M48 48c-17.7 0-32 14.3-32 32v352c0 17.7 14.3 32 32 32h48c17.7 0 32-14.3 32-32V80c0-17.7-14.3-32-32-32zm91.4 404.5C131.7 468.8 115.2 480 96 480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h48c19.2 0 35.7 11.2 43.4 27.5C151 42.9 170.2 32 192 32h256c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H192c-21.8 0-41-10.9-52.6-27.5M144 416c0 26.5 21.5 48 48 48h256c26.5 0 48-21.5 48-48V96c0-26.5-21.5-48-48-48H192c-26.5 0-48 21.5-48 48zm272-304H224c-8.8 0-16 7.2-16 16v96c0 8.8 7.2 16 16 16h192c8.8 0 16-7.2 16-16v-96c0-8.8-7.2-16-16-16M224 96h192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32v-96c0-17.7 14.3-32 32-32m0 240a16 16 0 1 1 0 32 16 16 0 1 1 0-32m112 16a16 16 0 1 1-32 0 16 16 0 1 1 32 0m80-16a16 16 0 1 1 0 32 16 16 0 1 1 0-32"})
);

export default LanPhoneIntercomThin;
