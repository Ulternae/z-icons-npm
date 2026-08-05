import React from 'react';

export function LanBootHeeled({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M16 0C11.4 0 7.1 2 4 5.4s-4.5 8-3.9 12.5l30.3 257.8c.8 7 .1 14.1-2.1 20.8L7.4 359.2C2.5 373.9 0 389.3 0 404.8V496c0 8.8 7.2 16 16 16h128c8.8 0 16-7.2 16-16v-36.4l58.5 33.5c21.8 12.4 46.4 19 71.4 19h142c8.8 0 16-7.2 16-16v-58.7c0-28.8-15.5-55.5-40.6-69.6l-115.6-65.5c-16.4-9.2-25.8-27.2-24.2-45.9l20.5-239c.4-4.5-1.1-8.9-4.2-12.2S276.5 0 272 0zm16 448h96v32H32zm112-32H32v-11.2c0-12 1.9-24 5.7-35.4l20.9-62.8c3.7-11.1 4.9-23 3.6-34.6L34 32h78v176c0 8.8 7.2 16 16 16s16-7.2 16-16V32h110.6l-19 221.7c-2.7 31.2 13.1 61.1 40.3 76.5l115.7 65.4c15.1 8.5 24.4 24.5 24.4 41.8v42.7H290c-19.5 0-38.6-5.1-55.6-14.8l-82.5-47.1c-2.4-1.4-5.2-2.1-7.9-2.1z"})
  );
}

export default LanBootHeeled;
