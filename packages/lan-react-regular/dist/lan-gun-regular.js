import React from 'react';

export function LanGunRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M528 56c0-13.3-10.7-24-24-24s-24 10.7-24 24v8H40C17.9 64 0 81.9 0 104v96c0 22.1 17.9 40 40 40h2c20.8 0 36.1 19.6 31 39.8L33 440.2c-2.4 9.6-.2 19.7 5.8 27.5S54.1 480 64 480h112c14.7 0 27.5-10 31-24.2L233 352h88.4c23.7 0 44.8-14.9 52.7-37.2l26.7-74.8h32.5c10.6 0 20.8-4.2 28.3-11.7l20.3-20.3H536c22.1 0 40-17.9 40-40v-64c0-22.1-17.9-40-40-40h-8zM245 304l16-64h89l-21 58.7c-1.1 3.2-4.2 5.3-7.5 5.3zm-33.5-64-48 192h-79l35.1-140.6c4.5-18.1 2.5-35.9-4.3-51.4h96.1zm55.5-48H48v-80h480v48h-49.4c-10.6 0-20.8 4.2-28.3 11.7L430 192z"})
  );
}

export default LanGunRegular;
