import React from 'react';

export function LanArrowDown19({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m235.3 379.3-96 96c-6.2 6.2-16.4 6.2-22.6 0l-96-96c-6.2-6.2-6.2-16.4 0-22.6s16.4-6.2 22.6 0l68.7 68.7V48c0-8.8 7.2-16 16-16s16 7.2 16 16v377.4l68.7-68.7c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6M409.6 35.2c4 3 6.4 7.8 6.4 12.8v144h40c8.8 0 16 7.2 16 16s-7.2 16-16 16H344c-8.8 0-16-7.2-16-16s7.2-16 16-16h40V69.2l-35.6 10.2c-8.5 2.4-17.4-2.5-19.8-11s2.5-17.4 11-19.8l56-16c4.8-1.4 10-.4 14 2.6M448 336a48 48 0 1 0-96 0 48 48 0 1 0 96 0m-42.1 79.8c-2 .1-3.9.2-5.9.2-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80c0 18.9-5.8 37.3-16.5 52.8l-58.3 84.3c-5 7.3-15 9.1-22.3 4s-9.1-15-4-22.3l27.1-39.1z"})
  );
}

export default LanArrowDown19;
