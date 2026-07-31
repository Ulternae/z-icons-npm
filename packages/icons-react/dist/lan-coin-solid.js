import React from 'react';

export const LanCoinSolid = ({ size = 24, color, style, ...props }) => React.createElement(
  'svg',
  {
    viewBox: '0 0 512 512',
    width: size,
    height: size,
    fill: 'none', stroke: 'currentColor', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2,
    ...props,
    style: { ...(color ? { color } : {}), ...style },
  }, React.createElement("path", {"fill":"currentColor","d":"M0 304v-96C0 128.5 114.6 64 256 64s256 64.5 256 144v96c0 29.1-19.4 55.9-52 77.3V295c-11.7 8.7-25.1 16.6-40 23.6v83.7c-23.5 9.8-50.5 17.5-80 22.7v-80.9c-12.9 2.5-26.3 4.5-40 5.8v80.2c-14.3 1.2-29 1.9-44 1.9s-29.7-.6-44-1.9v-80.2c-13.7-1.3-27.1-3.3-40-5.8V425c-29.5-5.1-56.5-12.9-80-22.7v-83.7c-14.9-7-28.3-14.9-40-23.6v86.3C19.4 359.9 0 333.1 0 304m64-96c0 53 86 96 192 96s192-43 192-96-86-96-192-96-192 43-192 96m48 0c0-35.3 64.5-64 144-64s144 28.7 144 64-64.5 64-144 64-144-28.7-144-64"})
);

export default LanCoinSolid;
