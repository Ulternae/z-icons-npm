import React from 'react';

export function LanBookArrowUpThin({ size = 24, color, style, ...props }) {
  return React.createElement(
    'svg',
    {
      viewBox: '0 0 448 512',
      width: size,
      height: size,
      fill: 'currentColor',
      ...props,
      style: { ...(color ? { color } : {}), ...style },
    }, React.createElement("path", {"fill":"currentColor","d":"M0 56C0 25.1 25.1 0 56 0h352c22.1 0 40 17.9 40 40v336c0 19.4-13.7 35.5-32 39.2V496h24c4.4 0 8 3.6 8 8s-3.6 8-8 8H56c-30.9 0-56-25.1-56-56zm56 360c-22.1 0-40 17.9-40 40s17.9 40 40 40h344v-80zm-40 .8C26.2 406.4 40.3 400 56 400h352c13.3 0 24-10.7 24-24V40c0-13.3-10.7-24-24-24H56c-22.1 0-40 17.9-40 40zm213.7-302.5 72 72c3.1 3.1 3.1 8.2 0 11.3s-8.2 3.1-11.3 0L232 139.3V296c0 4.4-3.6 8-8 8s-8-3.6-8-8V139.3l-58.3 58.3c-3.1 3.1-8.2 3.1-11.3 0s-3.1-8.2 0-11.3l72-72c3.1-3.1 8.2-3.1 11.3 0"})
  );
}

export default LanBookArrowUpThin;
