import React from 'react';

export const LanPianoKeyboard = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 224v64c0 8.8-7.2 16-16 16s-16-7.2-16-16v-64zm-32 109.3V416H304v-82.7c18.6-6.6 32-24.4 32-45.3v-64h48v64c0 20.9 13.4 38.7 32 45.3m32 82.7v-82.7c18.6-6.6 32-24.4 32-45.3v-64h64v160c0 17.7-14.3 32-32 32zm-16 32h80c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64C28.7 64 0 92.7 0 128v256c0 35.3 28.7 64 64 64zm-160-32H160v-82.7c18.6-6.6 32-24.4 32-45.3v-64h48v64c0 20.9 13.4 38.7 32 45.3zm-144 0H64c-17.7 0-32-14.3-32-32V224h64v64c0 20.9 13.4 38.7 32 45.3zm16-112c-8.8 0-16-7.2-16-16v-64h32v64c0 8.8-7.2 16-16 16m144 0c-8.8 0-16-7.2-16-16v-64h32v64c0 8.8-7.2 16-16 16m176-112H32v-64c0-17.7 14.3-32 32-32h448c17.7 0 32 14.3 32 32v64z"})
);

export default LanPianoKeyboard;
