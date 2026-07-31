import React from 'react';

export const LanHashtagLockSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 -0.016 640 544.016',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M246.7.7c17.3 3.7 28.3 20.7 24.6 38L252.2 128h126.5l22-102.7C404.4 8 421.4-3 438.7.7s28.3 20.7 24.6 38L444.2 128H512c17.7 0 32 14.3 32 32 0 6-1.7 11.7-4.6 16.5-3.8-.3-7.6-.5-11.4-.5-22.5 0-43.6 5.8-62 16h-35.6l-8.7 40.6C408 253 400 277.6 400 304v24.4c-19.6 17.6-32 43.1-32 71.5v83.5l-.7 3.3c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3H197.3l-22 102.7c-3.7 17.3-20.7 28.3-38 24.6s-28.3-20.7-24.6-38l19.1-89.3H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h81.6L173 192h-67.8c-17.7 0-32-14.3-32-32s14.3-32 32-32h81.6l22-102.7C212.4 8 229.4-3 246.7.7M238.4 192 211 320h126.5l27.4-128zM560 352v-47.9c0-17.7-14.3-32-32-32s-32 14.3-32 32V352zm-144 48c0-20.9 13.4-38.7 32-45.3v-50.6c0-44.2 35.8-80 80-80s80 35.8 80 80v50.6c18.6 6.6 32 24.4 32 45.3v96c0 26.5-21.5 48-48 48H464c-26.5 0-48-21.5-48-48z"})
);

export default LanHashtagLockSolid;
