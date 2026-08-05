import React from 'react';

export function LanHillRockslideRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M128 64a32 32 0 1 1 64 0 32 32 0 1 1-64 0m124.4 71.8c-2.7-4.9-2.7-10.8 0-15.7l27-48c2.8-5 8.2-8.2 13.9-8.2h53.3c5.8 0 11.1 3.1 13.9 8.2l27 48c2.7 4.9 2.7 10.8 0 15.7l-27 48c-2.8 5-8.2 8.2-13.9 8.2h-53.3c-5.8 0-11.1-3.1-13.9-8.2zM48 145.9V440c0 13.3 10.7 24 24 24h294.1zM0 126.6C0 91 43.1 73.1 68.3 98.3l345.4 345.4c25.2 25.2 7.4 68.3-28.3 68.3H72c-39.8 0-72-32.2-72-72zm504.2 277-48-27c-5-2.8-8.2-8.2-8.2-13.9v-53.3c0-5.8 3.1-11.1 8.2-13.9l48-27c4.9-2.7 10.8-2.7 15.7 0l48 27c5 2.8 8.2 8.2 8.2 13.9v53.3c0 5.8-3.1 11.1-8.2 13.9l-48 27c-4.9 2.7-10.8 2.7-15.7 0M352 256a32 32 0 1 1 0 64 32 32 0 1 1 0-64"})
  );
}

export default LanHillRockslideRegular;
