import React from 'react';

export function LanFaceSunglassesRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M256 464c-114.9 0-208-93.1-208-208 0-19 2.5-37.4 7.3-54.9l2.9 29.2C61.5 263.1 89 288 121.9 288h52.2c32.9 0 60.4-24.9 63.7-57.6l3.8-38.4h28.8l3.8 38.4c3.3 32.7 30.8 57.6 63.7 57.6h52.2c32.9 0 60.4-24.9 63.7-57.6l2.9-29.2c4.8 17.5 7.3 35.9 7.3 54.9 0 114.9-93.1 208-208 208zM91.3 129c38-49.3 97.7-81 164.7-81s126.7 31.7 164.7 81c-3.1-.7-6.4-1-9.8-1H317c-14.3 0-27 6.2-35.8 16h-50.5c-8.8-9.8-21.5-16-35.8-16H101c-3.4 0-6.6.3-9.8 1zM256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512M143.4 334.7c-9.6 9.2-9.9 24.4-.7 33.9 22.1 23 60 47.4 113.3 47.4s91.2-24.4 113.3-47.4c9.2-9.6 8.9-24.8-.7-33.9s-24.8-8.9-33.9.7C319.7 351 293.6 368 256 368s-63.7-17-78.7-32.6c-9.2-9.6-24.4-9.9-33.9-.7"})
  );
}

export default LanFaceSunglassesRegular;
