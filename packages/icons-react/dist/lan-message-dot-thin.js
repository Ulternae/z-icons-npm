import React from 'react';

export const LanMessageDotThin = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M560 80a64 64 0 1 0-128 0 64 64 0 1 0 128 0m-144 0a80 80 0 1 1 160 0 80 80 0 1 1-160 0M128 32h249.3c-2.1 5.2-3.9 10.5-5.3 16H128c-44.2 0-80 35.8-80 80v224c0 44.2 35.8 80 80 80h32c8.8 0 16 7.2 16 16v75.9c0 2.3 2 4 4.1 4.1.8 0 1.7-.2 2.4-.7 3.3-2.3 6.3-4.5 9.1-6.4l.4-.3c6.7-4.7 30.4-21.5 117.2-82.7 5.4-3.8 11.8-5.9 18.5-5.9H448c44.2 0 80-35.8 80-80V204c5.5-1.4 10.8-3.2 16-5.3V352c0 53-43 96-96 96H327.6c-3.3 0-6.5 1-9.2 2.9l-126.6 89.4c-3.4 2.4-7.5 3.7-11.6 3.7-11.1 0-20.1-9-20.1-20.1V448h-32c-53 0-96-43-96-96V128c0-53 43-96 96-96z"})
);

export default LanMessageDotThin;
