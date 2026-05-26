import React from 'react';

export const LanPersonShelter = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M264.2 2.3c-5.1-3-11.4-3-16.5 0l-240 144C2.9 149.2 0 154.4 0 160v336c0 8.8 7.2 16 16 16s16-7.2 16-16V169.1L256 34.7l224 134.4V496c0 8.8 7.2 16 16 16s16-7.2 16-16V160c0-5.6-2.9-10.8-7.8-13.7zM240 168a16 16 0 1 1 32 0 16 16 0 1 1-32 0m64 0a48 48 0 1 0-96 0 48 48 0 1 0 96 0M200 292.1V496c0 8.8 7.2 16 16 16s16-7.2 16-16v-96h48v96c0 8.8 7.2 16 16 16s16-7.2 16-16V292.1c1.2 1.7 2.4 3.4 3.5 5.2l38.8 63.1c4.6 7.5 14.5 9.9 22 5.2s9.9-14.5 5.2-22l-38.8-63.1C324.2 250.4 291.4 232 256 232s-68.2 18.4-86.8 48.5l-38.8 63.1c-4.6 7.5-2.3 17.4 5.2 22s17.4 2.3 22-5.2l38.8-63.1c1.1-1.8 2.3-3.5 3.5-5.2zm32 75.9v-99.8c7.6-2.8 15.7-4.2 24-4.2s16.4 1.5 24 4.2V368z"})
);

export default LanPersonShelter;
