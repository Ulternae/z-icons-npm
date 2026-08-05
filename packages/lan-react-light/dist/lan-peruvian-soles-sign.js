import React from 'react';

export function LanPeruvianSolesSign({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M494.1.5c8.5 2.2 13.7 11 11.5 19.5l-124 480c-2.2 8.5-11 13.7-19.5 11.5-8.6-2.2-13.7-10.9-11.5-19.5l124-480c2.2-8.6 10.9-13.7 19.5-11.5M256 64c8.8 0 16 7.2 16 16s-7.2 16-16 16H113.9C77.6 96 48 125.5 48 161.9c0 32.5 23.7 60.1 55.8 65.1l113.8 17.8c49.7 7.8 86.4 50.6 86.4 101 0 56.5-45.8 102.2-102.2 102.2H48c-8.8 0-16-7.2-16-16s7.2-16 16-16h153.8c38.8 0 70.2-31.4 70.2-70.2 0-34.6-25.2-64-59.4-69.4L98.8 258.6C51.2 251.2 16 210.1 16 161.9 16 107.8 59.9 64 113.9 64z"})
  );
}

export default LanPeruvianSolesSign;
