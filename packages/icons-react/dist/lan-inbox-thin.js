import React from 'react';

export const LanInboxThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96.4 32C64.6 32 37.7 55.3 33 86.7l-29.5 201C1.2 303.5 0 319.4 0 335.4V416c0 35.3 28.7 64 64 64h384c35.3 0 64-28.7 64-64v-80.6c0-16-1.2-31.9-3.5-47.7L479 86.7C474.3 55.3 447.4 32 415.6 32zM48.9 89c3.5-23.6 23.7-41 47.5-41h319.3c23.8 0 44 17.5 47.5 41l29.6 201c.7 4.6 1.3 9.3 1.7 14H376.6c-8 0-15.5 4-20 10.7l-22.5 33.8c-1.5 2.2-4 3.6-6.7 3.6H184.5c-2.7 0-5.2-1.3-6.7-3.6l-22.5-33.8c-4.5-6.7-11.9-10.7-20-10.7H17.6c.5-4.7 1.1-9.3 1.7-14zM16 320h119.4c2.7 0 5.2 1.3 6.7 3.6l22.5 33.8c4.5 6.7 11.9 10.7 20 10.7h142.9c8 0 15.5-4 20-10.7l22.5-33.8c1.5-2.2 4-3.6 6.7-3.6h119.4v96c0 26.5-21.5 48-48 48H64c-26.5 0-48-21.5-48-48z"})
);

export default LanInboxThin;
