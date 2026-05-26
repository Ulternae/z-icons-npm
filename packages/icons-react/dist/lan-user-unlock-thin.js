import React from 'react';

export const LanUserUnlockThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M336 128a112 112 0 1 0-224 0 112 112 0 1 0 224 0m-240 0a128 128 0 1 1 256 0 128 128 0 1 1-256 0M16 480v24c0 4.4-3.6 8-8 8s-8-3.6-8-8v-24c0-97.2 78.8-176 176-176h96c22.6 0 44.2 4.3 64 12v12.4c-1.2 1.1-2.4 2.2-3.6 3.4-18.6-7.6-39-11.8-60.4-11.8h-96c-88.4 0-160 71.6-160 160m496-176v-16c0-26.5-21.5-48-48-48s-48 21.5-48 48v64h112c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H400c-26.5 0-48-21.5-48-48v-96c0-26.5 21.5-48 48-48v-64c0-35.3 28.7-64 64-64s64 28.7 64 64v16zm-144 96v96c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-96c0-17.7-14.3-32-32-32H400c-17.7 0-32 14.3-32 32"})
);

export default LanUserUnlockThin;
