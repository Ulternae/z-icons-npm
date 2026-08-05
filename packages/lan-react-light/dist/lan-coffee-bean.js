import React from 'react';

export function LanCoffeeBean({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"m48.8 372.9 28.8-33.6c36.6-42.7 90.1-67.3 146.3-67.3 65.6 0 127.9-28.7 170.6-78.5l17-19.8c14.3 62.2-6.8 139.9-68.4 201.5-87.7 87.7-208.1 93.3-269.9 31.5-9.9-9.9-18.1-21.3-24.4-33.8m-12.4-34.6c-14.3-62.2 6.8-139.9 68.4-201.5 87.7-87.7 208.1-93.3 269.9-31.5 9.9 9.9 18.1 21.3 24.4 33.8l-28.8 33.6C333.7 215.4 280.2 240 224 240c-65.6 0-127.9 28.7-170.6 78.5zm45.8-224.1C-13.6 209.9-27.7 351 50.6 429.4s219.5 64.2 315.2-31.6S475.7 161 397.4 82.6 177.9 18.4 82.2 114.2"})
  );
}

export default LanCoffeeBean;
