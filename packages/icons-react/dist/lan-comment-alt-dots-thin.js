import React from 'react';

export const LanCommentAltDotsThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M144 448v75.9c0 2.3 2 4 4.1 4.1.8 0 1.7-.2 2.4-.7 3.3-2.3 6.3-4.5 9.1-6.4l.4-.3c6.7-4.7 30.4-21.5 117.2-82.7 5.4-3.8 11.8-5.9 18.5-5.9H416c44.2 0 80-35.8 80-80V128c0-44.2-35.8-80-80-80H96c-44.2 0-80 35.8-80 80v224c0 44.2 35.8 80 80 80h32c8.8 0 16 7.2 16 16M0 128c0-53 43-96 96-96h320c53 0 96 43 96 96v224c0 53-43 96-96 96H295.6c-3.3 0-6.5 1-9.2 2.9l-126.6 89.4c-3.4 2.4-7.5 3.7-11.6 3.7-11.1 0-20.1-9-20.1-20.1V448h-32c-53 0-96-43-96-96zm112 112a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m112-32a16 16 0 1 0 32 0 16 16 0 1 0-32 0m16 32a32 32 0 1 1 0-64 32 32 0 1 1 0 64m128-48a16 16 0 1 0 0 32 16 16 0 1 0 0-32m32 16a32 32 0 1 1-64 0 32 32 0 1 1 64 0"})
);

export default LanCommentAltDotsThin;
