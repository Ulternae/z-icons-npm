import React from 'react';

export const LanStapler = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 640 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M448 384v64H48c-8.8 0-16 7.2-16 16s7.2 16 16 16h512c44.2 0 80-35.8 80-80V299.3c0-36.4-20.5-69.6-53.1-85.9l-326.2-163C236.6 38.3 209.9 32 182.9 32c-54.7 0-106.2 25.8-139.1 69.6l-32.3 43.1C4 154.6 0 166.7 0 179.1c0 26.4 17.9 49.4 43.5 55.8L72 242v110c0 17.7 14.3 32 32 32zm0-32H104V250l344 86zm112 96h-80V336c0-14.7-10-27.5-24.2-31L51.3 203.8C40 201 32 190.8 32 179.1c0-5.5 1.8-10.9 5.1-15.3l32.3-43.1C96.2 85 138.3 64 182.9 64c22.1 0 43.8 5.1 63.5 15l326.2 163.1c21.7 10.8 35.4 33 35.4 57.2V400c0 26.5-21.5 48-48 48"})
);

export default LanStapler;
