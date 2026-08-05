import React from 'react';

export function LanFontCase({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 576 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M64 168v88h160v-88c0-39.8-32.2-72-72-72h-16c-39.8 0-72 32.2-72 72M32 272V168c0-57.4 46.6-104 104-104h16c57.4 0 104 46.6 104 104v264c0 8.8-7.2 16-16 16s-16-7.2-16-16V288H64v144c0 8.8-7.2 16-16 16s-16-7.2-16-16zm392-48c-39.8 0-72 32.2-72 72v48c0 39.8 32.2 72 72 72h16c39.8 0 72-32.2 72-72v-48c0-39.8-32.2-72-72-72zm88-3v-13c0-8.8 7.2-16 16-16s16 7.2 16 16v134.5c0 25.8 4.2 51.4 12.3 75.9l2.9 8.6c2.8 8.4-1.7 17.4-10.1 20.2s-17.4-1.7-20.2-10.1l-2.9-8.6c-2-6.1-3.9-12.3-5.5-18.6-19.1 23.3-48 38.1-80.5 38.1h-16c-57.4 0-104-46.6-104-104v-48c0-57.4 46.6-104 104-104h16c27.9 0 53.3 11 72 29"})
  );
}

export default LanFontCase;
