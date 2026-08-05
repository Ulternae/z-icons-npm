import React from 'react';

export function LanViharaRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 -8 576.1 520',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M273.6-3.2c8.5-6.4 20.3-6.4 28.8 0l140.8 105.6c8.3 6.2 18.4 9.6 28.8 9.6 13.3 0 24 10.7 24 24s-10.7 24-24 24c-8.1 0-16.2-1-24-3v35h-.6l61.7 96H520c13.3 0 24 10.7 24 24s-10.7 24-24 24h-14.6l36.6 64h10.1c13.3 0 24 10.7 24 24s-10.7 24-24 24h-24v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-168v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-168v40c0 13.3-10.7 24-24 24s-24-10.7-24-24v-40h-24c-13.3 0-24-10.7-24-24s10.7-24 24-24h17.2l32-64H56.1c-13.3 0-24-10.7-24-24s10.7-24 24-24H67l61.7-96h-.6v-35c-7.8 2-15.9 3-24 3-13.3 0-24-10.7-24-24s10.7-24 24-24c10.4 0 20.5-3.4 28.8-9.6zM124 288h328.1L411 224H165.2l-41.1 64zM94.8 400h391.8L450 336H126.8zM400 130 288 46l-112 84v46h224z"})
  );
}

export default LanViharaRegular;
