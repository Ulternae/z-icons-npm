import React from 'react';

export const LanSackXmarkRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M379 56.7 332.6 138C416.5 214.5 496 291.7 496 416.8c0 52.6-42.6 95.2-95.2 95.2H111.2C58.6 512 16 469.4 16 416.8 16 291.7 95.5 214.5 179.4 138L133 56.7c-3.3-5.7-5-12.2-5-18.8C128 17 145 0 165.9 0h180.2C367 0 384 17 384 37.9c0 6.6-1.7 13.1-5 18.8M226.6 160l-.9.9C134.2 244.4 64 308.6 64 416.8c0 26.1 21.1 47.2 47.2 47.2h289.6c26.1 0 47.2-21.1 47.2-47.2 0-108.3-70.2-172.4-161.7-256l-.9-.9h-58.7zm-6.8-48h72.3l36.6-64H183.3l36.6 64zm104 156.1c9.4 9.4 9.4 24.6 0 33.9l-33.9 33.9 33.9 33.9c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0L256 369.8l-33.9 33.9c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l33.9-33.9-33.9-33.9c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L256 302l33.9-33.9c9.4-9.4 24.6-9.4 33.9 0"})
);

export default LanSackXmarkRegular;
