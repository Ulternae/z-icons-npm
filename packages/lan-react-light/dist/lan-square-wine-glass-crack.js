import React from 'react';

export function LanSquareWineGlassCrack({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 64c-17.7 0-32 14.3-32 32v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zM0 96c0-35.3 28.7-64 64-64h320c35.3 0 64 28.7 64 64v320c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64zm144 32v80c0 44.2 35.8 80 80 80s80-35.8 80-80v-80h-73.4l20.7 20.7c3.4 3.4 5.1 8.1 4.6 12.9s-3.1 9.1-7 11.7l-30.2 20.1 31.5 26.3c6.8 5.7 7.7 15.7 2 22.5s-15.7 7.7-22.5 2l-48-40c-3.9-3.2-6-8.1-5.7-13.1s2.9-9.7 7.1-12.5l31.8-21.2-29.5-29.5H144zm-1.1-32h162.2c17.1 0 30.9 13.8 30.9 30.9V208c0 56.4-41.7 103.1-96 110.9V384h32c8.8 0 16 7.2 16 16s-7.2 16-16 16h-96c-8.8 0-16-7.2-16-16s7.2-16 16-16h32v-65.1c-54.3-7.8-96-54.4-96-110.9v-81.1c0-17.1 13.8-30.9 30.9-30.9"})
  );
}

export default LanSquareWineGlassCrack;
