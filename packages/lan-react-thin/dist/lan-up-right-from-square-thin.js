import React from 'react';

export function LanUpRightFromSquareThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m306.4 29.7 176.1 176c2.3 2.3 5.7 3 8.7 1.7s4.9-4.2 4.9-7.4V24c0-4.4-3.6-8-8-8h-176c-3.2 0-6.2 1.9-7.4 4.9s-.6 6.4 1.7 8.7zM471.2 217l-82.4-82.4-183.1 183.1c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l183.1-183.1L295.1 41c-6.9-6.9-8.9-17.2-5.2-26.2S302.4 0 312.1 0h176.1c13.3 0 24 10.7 24 24v176c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2M.1 176.1C.1 131.9 36 96 80.2 96h103.9c4.4 0 8 3.6 8 8s-3.6 8-8 8H80.2c-35.4 0-64.1 28.7-64.1 64.1v255.7c0 35.4 28.7 64.1 64.1 64.1l255.8.1c35.4 0 64.1-28.7 64.1-64.1V328c0-4.4 3.6-8 8-8s8 3.6 8 8v103.9c0 44.3-35.9 80.1-80.1 80.1H80.2C36 512 .1 476.1.1 431.9V176.2z"})
  );
}

export default LanUpRightFromSquareThin;
