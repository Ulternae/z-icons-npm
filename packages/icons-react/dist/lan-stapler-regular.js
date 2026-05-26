import React from 'react';

export const LanStaplerRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"M448 384v48H56c-13.3 0-24 10.7-24 24s10.7 24 24 24h536c26.5 0 48-21.5 48-48V288l-.7-.1c-3.8-31.8-23.3-59.9-52.4-74.4L260.7 50.4C236.6 38.3 209.9 32 182.9 32c-54.7 0-106.2 25.8-139.1 69.6l-32.3 43.1C4 154.6 0 166.7 0 179.1c0 26.4 17.9 49.4 43.5 55.8L64 240v104c0 22.1 17.9 40 40 40zm0-48H112v-84zm72 96h-24v-96c0-22-15-41.2-36.4-46.6L55.2 188.3c-4.2-1.1-7.2-4.8-7.2-9.2 0-2 .7-4 1.9-5.7l32.3-43.1c23.8-31.7 61.1-50.4 100.7-50.4 19.5 0 38.8 4.6 56.3 13.3l326.3 163.2c14.5 7.3 24.3 21.3 26.2 37.2l.3 2.4v136z"})
);

export default LanStaplerRegular;
