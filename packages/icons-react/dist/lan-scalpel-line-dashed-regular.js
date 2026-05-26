import React from 'react';

export const LanScalpelLineDashedRegular = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement('path', {"fill":"currentColor","d":"m195.5 352-79.8 80h2.3c55.2 0 108.1-21.9 147.1-60.9l19.1-19.1h-88.6zM486.2 60.7 243.4 304H352c7.8 0 15.2-3.1 20.7-8.6l174.7-174.6c8-8 12.5-19 12.5-30.3-.1-23.2-19.3-42.4-43-42.4-11.5 0-22.7 4.6-30.7 12.7zM67.8 480H0l47.9-48L452.2 26.8C469.3 9.7 492.7 0 516.9 0c49.9 0 90.8 40.3 91 90.2.1 24.2-9.4 47.4-26.5 64.5L406.6 329.4C392.1 343.9 372.5 352 352 352l-53 53c-48 48-113.1 75-181 75zM344 432h80c13.3 0 24 10.7 24 24s-10.7 24-24 24h-80c-13.3 0-24-10.7-24-24s10.7-24 24-24m176 0h64c13.3 0 24 10.7 24 24s-10.7 24-24 24h-64c-13.3 0-24-10.7-24-24s10.7-24 24-24"})
);

export default LanScalpelLineDashedRegular;
