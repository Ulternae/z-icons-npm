import React from 'react';

export function LanFileWord({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 384 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 32h128v96c0 35.3 28.7 64 64 64h96v256c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V64c0-17.7 14.3-32 32-32m160 13.3L338.7 160H256c-17.7 0-32-14.3-32-32zM64 0C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h256c35.3 0 64-28.7 64-64V186.5c0-17-6.7-33.3-18.7-45.3L242.7 18.7C230.7 6.7 214.5 0 197.5 0zm63.6 268.5c-1.9-8.6-10.5-14.1-19.1-12.1s-14.1 10.5-12.1 19.1l32 144c1.6 7 7.6 12.1 14.8 12.5s13.7-4.1 16-10.9l32.8-98.5 32.8 98.5c2.3 6.8 8.8 11.3 16 10.9s13.2-5.5 14.8-12.5l32-144c1.9-8.6-3.5-17.2-12.1-19.1s-17.2 3.5-19.1 12.1l-19.5 87.6-29.7-89.2c-2.2-6.5-8.3-10.9-15.2-10.9s-13 4.4-15.2 10.9l-29.7 89.2z"})
  );
}

export default LanFileWord;
