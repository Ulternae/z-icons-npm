import React from 'react';

export const LanLitecoinSign = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 384 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M96 48c0-8.8-7.2-16-16-16s-16 7.2-16 16v179.5l-51.9 13C3.6 242.6-1.7 251.3.5 259.9s10.8 13.8 19.4 11.6l44.1-11V440c0 22.1 17.9 40 40 40h264c8.8 0 16-7.2 16-16s-7.2-16-16-16H104c-4.4 0-8-3.6-8-8V252.5l179.9-45c8.6-2.1 13.8-10.8 11.6-19.4s-10.8-13.8-19.4-11.6L96 219.5z"})
);

export default LanLitecoinSign;
