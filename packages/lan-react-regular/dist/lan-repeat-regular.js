import React from 'react';

export function LanRepeatRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M352 151c0 22.6 18.3 41 41 41 10.9 0 21.3-4.3 29-12l67-67c4.5-4.5 7-10.6 7-17s-2.5-12.5-7-17l-67-67c-7.7-7.7-18.1-12-29-12-22.6 0-41 18.3-41 41v31H192C86 72 0 158 0 264c0 13.3 10.7 24 24 24s24-10.7 24-24c0-79.5 64.5-144 144-144h160zm86.1-55L400 134.1V57.9zM119 512c22.6 0 41-18.3 41-41v-31h160c106 0 192-86 192-192 0-13.3-10.7-24-24-24s-24 10.7-24 24c0 79.5-64.5 144-144 144H160v-31c0-22.6-18.3-41-41-41-10.9 0-21.3 4.3-29 12l-67 67c-4.5 4.5-7 10.6-7 17s2.5 12.5 7 17l67 67c7.7 7.7 18.1 12 29 12m-45.1-96 38.1-38.1V454l-38.1-38.1z"})
  );
}

export default LanRepeatRegular;
