import React from 'react';

export const LanCourtSportThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M64 48c-26.5 0-48 21.5-48 48v32h48c35.3 0 64 28.7 64 64v128c0 35.3-28.7 64-64 64H16v32c0 26.5 21.5 48 48 48h248V351.7c-49.3-4.1-88-45.3-88-95.7s38.7-91.6 88-95.7V48zm264 303.7V464h248c26.5 0 48-21.5 48-48v-32h-48c-35.3 0-64-28.7-64-64V192c0-35.3 28.7-64 64-64h48V96c0-26.5-21.5-48-48-48H328v112.3c49.3 4.1 88 45.3 88 95.7s-38.7 91.6-88 95.7m0-175.3v159.2c40.4-4 72-38.1 72-79.6s-31.6-75.6-72-79.6m-16 0c-40.4 4-72 38.1-72 79.6s31.6 75.6 72 79.6zM16 144v224h48c26.5 0 48-21.5 48-48V192c0-26.5-21.5-48-48-48zm560 224h48V144h-48c-26.5 0-48 21.5-48 48v128c0 26.5 21.5 48 48 48M0 96c0-35.3 28.7-64 64-64h512c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"})
);

export default LanCourtSportThin;
