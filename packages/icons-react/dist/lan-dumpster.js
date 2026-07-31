import React from 'react';

export const LanDumpster = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 576 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M58.8 108.9c1.5-7.5 8-12.9 15.7-12.9h59.2l-19.2 128H45.6c-5 0-8.8-4.6-7.8-9.6zm88 115.1L166 96h106.2v128zM304.2 96h105.9l19.5 128H304.2zm138.3 0H502c7.6 0 14.2 5.4 15.7 12.9l21.1 105.6c1 5-2.8 9.6-7.8 9.6h-69l-19.5-128zm-368-32c-22.9 0-42.6 16.2-47.1 38.6L6.3 208.2c-4.2 20.9 8.6 40.5 27.8 46.2l30.3 211.9c1.2 8.7 9.4 14.8 18.1 13.6s14.8-9.4 13.6-18.1l-2-13.7h388.2l-2 13.7c-1.2 8.7 4.8 16.9 13.6 18.1s16.9-4.8 18.1-13.6l30.3-211.9c19.2-5.7 32-25.4 27.8-46.2l-21-105.6C544.6 80.2 524.9 64 502 64zm435.3 192-22.9 160H89.5L66.6 256h443.1z"})
);

export default LanDumpster;
