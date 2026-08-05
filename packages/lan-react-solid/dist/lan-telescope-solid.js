import React from 'react';

export function LanTelescopeSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M375.9 40c-15.3 8.8-20.6 28.4-11.7 43.7l96 166.3c8.8 15.3 28.4 20.5 43.7 11.7l55.4-32c15.3-8.8 20.5-28.4 11.7-43.7L475 19.7C466.2 4.4 446.6-.8 431.3 8zM12 343.6c-11.5 6.7-15.4 21.3-8.8 32.8l25.9 44.9c6.6 11.5 21.3 15.4 32.8 8.8l44.1-25.5.8 1.4c8.6 15 27.6 20.4 42.8 12.2l88.4-47.4L193.9 479c-5 12.3.9 26.3 13.2 31.3s26.3-.9 31.3-13.2l65.8-161.4L370 497.1c5 12.3 19 18.2 31.3 13.2s18.2-19 13.2-31.3l-67.8-166.4 71.9-38.6-96-166.2c-.9-1.6-1.7-3.1-2.5-4.7L62.6 268.4c-14.4 9.2-19 28.1-10.4 42.9l4 6.9-44.1 25.5z"})
  );
}

export default LanTelescopeSolid;
