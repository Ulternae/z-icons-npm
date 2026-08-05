import React from 'react';

export function LanShelvesRegular({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 512 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M24 0c13.3 0 24 10.7 24 24v144h416V24c0-13.3 10.7-24 24-24s24 10.7 24 24v464c0 13.3-10.7 24-24 24s-24-10.7-24-24v-16H48v16c0 13.3-10.7 24-24 24S0 501.3 0 488V24C0 10.7 10.7 0 24 0m24 424h416V216H48zm104-168h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40v-48c0-22.1 17.9-40 40-40m120 40c0-22.1 17.9-40 40-40h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40zM312 0h48c22.1 0 40 17.9 40 40v48c0 22.1-17.9 40-40 40h-48c-22.1 0-40-17.9-40-40V40c0-22.1 17.9-40 40-40"})
  );
}

export default LanShelvesRegular;
