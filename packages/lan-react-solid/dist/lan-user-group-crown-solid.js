import React from 'react';

export function LanUserGroupCrownSolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -9.35 576 521.35',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M240 128c0 35.3-28.7 64-64 64s-64-28.7-64-64zM64 25.9V128c0 61.9 50.1 112 112 112s112-50.1 112-112V25.9c0-11.9-12.5-19.6-23.2-14.3l-30.5 15.2c-6.2 3.1-13.6 1.9-18.5-3L187.3-4.7c-6.2-6.2-16.4-6.2-22.6 0l-28.5 28.5c-4.9 4.9-12.3 6.1-18.5 3L87.2 11.6C76.5 6.3 64 14 64 25.9M432 256a96 96 0 1 0 0-192 96 96 0 1 0 0 192m0 48c-29 0-56 8.6-78.5 23.3C382.7 365.1 400 412.5 400 464v6c0 15.2-3.8 29.5-10.4 42h144.8c23 0 41.6-18.6 41.6-41.6V448c0-79.5-64.5-144-144-144m-256-16C78.8 288 0 366.8 0 464v6c0 23.2 18.8 42 42 42h268c23.2 0 42-18.8 42-42v-6c0-97.2-78.8-176-176-176"})
  );
}

export default LanUserGroupCrownSolid;
