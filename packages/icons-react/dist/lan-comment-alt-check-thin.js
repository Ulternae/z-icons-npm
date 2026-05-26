import React from 'react';

export const LanCommentAltCheckThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M416 32c53 0 96 43 96 96v224c0 53-43 96-96 96H295.6c-3.3 0-6.6 1-9.3 2.9l-126.5 89.4c-3.4 2.4-7.4 3.7-11.6 3.7-11.1 0-20.2-9-20.2-20.2V448H96c-53 0-96-43-96-96V128c0-53 43-96 96-96zM96 48c-44.2 0-80 35.8-80 80v224c0 44.2 35.8 80 80 80h32c8.8 0 16 7.2 16 16v75.8c0 3.1 4 5.2 6.5 3.4l126.6-89.4c5.4-3.8 11.9-5.8 18.5-5.8H416c44.2 0 80-35.8 80-80V128c0-44.2-35.8-80-80-80zm257.4 88.4c2.6-3.6 7.6-4.3 11.2-1.8s4.4 7.6 1.8 11.2L230.5 332.7c-1.4 1.9-3.5 3.1-5.8 3.3s-4.6-.7-6.3-2.3l-72-72c-3.1-3.1-3.1-8.2 0-11.3s8.2-3.1 11.3 0l65.3 65.3z"})
);

export default LanCommentAltCheckThin;
