import React from 'react';

export function LanClapperboardPlaySolid({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M485.8 64.3c-1.9-.2-3.8-.3-5.8-.3h-86.1l-1 1-95 95H230l96-96h-92.1l-1 1-95 95H70l96-96H95.9c-35.3 0-64 28.7-64 64v256c0 35.3 28.7 64 64 64h161.4c-11.2-24.4-17.4-51.4-17.4-80 0-106 86-192 192-192 41.8 0 80.5 13.4 112 36v-84c0-15.1-5.3-29.1-14-40l-45.7 45.7c-16.8-3.7-34.3-5.7-52.2-5.7-3.4 0-6.8.1-10.2.2l63.9-64zM432 512a144 144 0 1 0 0-288 144 144 0 1 0 0 288m-23.8-205.7 80 48c4.8 2.9 7.8 8.1 7.8 13.7s-2.9 10.8-7.8 13.7l-80 48c-4.9 3-11.1 3-16.1.2s-8.1-8.1-8.1-13.9v-96c0-5.8 3.1-11.1 8.1-13.9s11.2-2.8 16.1.2"})
  );
}

export default LanClapperboardPlaySolid;
